from PIL import Image as PILImage
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
import sys


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
                                              f"{instance.image.name.split('.')[0]}.jpg", 'image/jpeg',
                                              sys.getsizeof(output_io_stream), None)
