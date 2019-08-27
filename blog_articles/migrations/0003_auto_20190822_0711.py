# Generated by Django 2.2.4 on 2019-08-22 06:11

import ckeditor_uploader.fields
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('blog_articles', '0002_auto_20190821_1019'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='content',
            field=ckeditor_uploader.fields.RichTextUploadingField(),
        ),
        migrations.CreateModel(
            name='Comments',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author_name', models.CharField(max_length=100)),
                ('author_email', models.EmailField(max_length=100)),
                ('text', models.TextField()),
                ('created_at', models.DateTimeField(verbose_name=django.utils.timezone.now)),
                ('approved_comment', models.BooleanField(default=False)),
                ('article', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='blog_articles.Article')),
            ],
        ),
    ]