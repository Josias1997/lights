# Generated by Django 2.2.4 on 2019-08-26 19:52

from django.db import migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_articles', '0007_auto_20190823_1251'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='content',
            field=tinymce.models.HTMLField(verbose_name='Content'),
        ),
    ]
