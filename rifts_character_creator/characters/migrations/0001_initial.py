# Generated by Django 4.2.6 on 2023-10-19 19:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('classes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Character',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('age', models.IntegerField(null=True)),
                ('occ', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='characters', to='classes.occ')),
                ('rcc', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='characters', to='classes.rcc')),
            ],
        ),
    ]