# Generated by Django 3.0.7 on 2020-06-27 07:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('welcome', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='welcome',
            name='img',
        ),
    ]
