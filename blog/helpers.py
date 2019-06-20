import os


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


def remove_file(instance):
    if os.path.exists(instance.image.url):
        os.remove(instance.image.url)
