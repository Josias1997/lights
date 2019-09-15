from PIL import Image as PILImage
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
import sys
import math
from django.core.mail import send_mail, EmailMessage
from django.template.loader import render_to_string
from django.conf import settings


def set_path(instance, path):
    instance.url = ""
    url_list = instance.image.url.split('/')
    try:
        url_list.remove(path)
        url_list.remove("pictures")
    except ValueError:
        pass
    finally:
        url_list.insert(2, '/' + path + '/pictures/')
        url = "".join(url_list)
    instance.url = "/" + url 


def compress_images(instance):
    if hasattr(instance, 'image'):
        image_temp = PILImage.open(instance.image)
        output_io_stream = BytesIO()
        image_temp_resized = image_temp.resize((1020, 573))
        image_temp.save(output_io_stream, format='JPEG', quality=30)
        output_io_stream.seek(0)
        instance.image = InMemoryUploadedFile(output_io_stream, 'ImageField',
                                              "{}.jpg".format(instance.image.name.split('.')[0]), 'image/jpeg',
                                              sys.getsizeof(output_io_stream), None)



def filter(articles_list, tags):
    related_articles = []
    for article in articles_list:
        number_tags_matched = 0
        for tag in tags:
            if tag in article.meta_keywords:
                number_tags_matched += 1
        if number_tags_matched >= math.floor(len(tags) * 0.75):
            related_articles.append(article)
    return related_articles


def send_mail_html(to_list, subject, template_name, context, sender=settings.EMAIL_HOST_USER):
    message_html = render_to_string(template_name, context)
    msg = EmailMessage(subject=subject, body=message_html, from_email=sender, bcc=to_list)
    msg.content_subtype = "html"
    msg.send()
