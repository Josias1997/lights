# Generated by Django 2.2.4 on 2019-08-26 23:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0009_reservation'),
    ]

    operations = [
        migrations.RenameField(
            model_name='aboutme',
            old_name='overview',
            new_name='description',
        ),
    ]