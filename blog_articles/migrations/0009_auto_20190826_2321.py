# Generated by Django 2.2.4 on 2019-08-26 22:21

import ckeditor_uploader.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog_articles', '0008_auto_20190826_2052'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='content',
            field=ckeditor_uploader.fields.RichTextUploadingField(),
        ),
    ]
