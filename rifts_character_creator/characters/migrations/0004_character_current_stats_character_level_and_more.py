# Generated by Django 4.2.6 on 2023-10-30 20:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('characters', '0003_character_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='character',
            name='current_stats',
            field=models.JSONField(null=True),
        ),
        migrations.AddField(
            model_name='character',
            name='level',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='character',
            name='max_stats',
            field=models.JSONField(null=True),
        ),
    ]