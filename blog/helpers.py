from PIL import Image as PILImage
from io import StringIO


def set_path(instance, path):
    instance.url = ""
    url_list = instance.image.url.split('/')
    try:
        url_list.remove(path)
        url_list.remove("pictures")
    except ValueError:
        pass
    finally:
        url_list.insert(1, '/' + path + '/pictures/')
    instance.url = "".join(url_list)


def compress_images(instance):
    if hasattr(instance, 'image'):
        print("yES")
        img = PILImage.open(StringIO(instance.image.read()))
        if img.mode != "RGB":
            img.convert('RGB')
        width, height = img.size
        if width > 640 or height > 480:
            width, height = 640, 480
        img.resize((width, height), PILImage.ANTIALIAS)
        save_buff = StringIO()
        img.save(save_buff, format="JPEG", optimize=True, quality=70)