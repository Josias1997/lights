# Generated by Django 2.2.4 on 2019-09-03 09:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_articles', '0012_blogtheme'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='content_overview',
            field=models.TextField(default='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis lobortis quam ut feugiat.'),
        ),
    ]
