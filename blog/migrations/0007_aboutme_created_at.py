# Generated by Django 2.2.2 on 2019-07-15 10:52

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0006_auto_20190620_1818'),
    ]

    operations = [
        migrations.AddField(
            model_name='aboutme',
            name='created_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]