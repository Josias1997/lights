# Generated by Django 2.2.4 on 2019-09-03 08:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Description',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('biographie', models.TextField()),
                ('vision', models.TextField()),
            ],
        ),
    ]