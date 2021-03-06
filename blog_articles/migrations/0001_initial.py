# Generated by Django 2.2.2 on 2019-08-20 20:39

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('author', models.CharField(max_length=100)),
                ('content', models.TextField()),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('is_visible', models.BooleanField(default=False)),
                ('url', models.CharField(default='none', max_length=100, null=True)),
                ('image', models.ImageField(null=True, upload_to='articles/pictures/')),
            ],
        ),
    ]
