# Generated by Django 4.2.6 on 2023-11-01 22:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('characters', '0004_character_current_stats_character_level_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='character',
            name='current_stats',
        ),
        migrations.RemoveField(
            model_name='character',
            name='max_stats',
        ),
        migrations.AddField(
            model_name='character',
            name='ps',
            field=models.JSONField(null=True),
        ),
    ]
