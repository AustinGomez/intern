# Generated by Django 2.2.2 on 2019-07-23 20:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('companies', '0009_auto_20190722_2000'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='avg_rating',
            field=models.FloatField(db_index=True, default=0.0),
        ),
        migrations.AlterField(
            model_name='company',
            name='slug',
            field=models.CharField(db_index=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='company',
            name='total_rating',
            field=models.FloatField(db_index=True, default=0.0),
        ),
    ]
