# Generated by Django 2.2.4 on 2019-08-23 11:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_articles', '0005_auto_20190822_0946'),
    ]

    operations = [
        migrations.CreateModel(
            name='NewsletterUsers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('name', models.CharField(max_length=100)),
                ('date_subscription', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]