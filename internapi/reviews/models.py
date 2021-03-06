from django.db import models
from base.models import BaseModel

# Create your models here.
class Review(BaseModel):
    description = models.TextField(blank=True, null=True)
    salary_in_cents = models.BigIntegerField(blank=True, null=True)
    anonymous = models.BooleanField(default=True)
    overall_rating = models.FloatField(null=False, blank=False)
    pay_period = models.CharField(max_length=50, blank=False, null=False)
    currency = models.CharField(max_length=5, blank=False, null=False)
    mentorship_rating = models.FloatField(blank=False, null=False)
    work_life_balance_rating = models.FloatField(blank=False, null=False)
    meaningful_work_rating = models.FloatField(blank=False, null=False)

    job = models.ForeignKey(db_index=True, to='jobs.Job', on_delete=models.CASCADE)
    company = models.ForeignKey(db_index=True, to="companies.Company", on_delete=models.CASCADE)
    # TODO: make this a real field.
    user_id = models.IntegerField()
    # user_id = models.ForeignKey(to='users.User', on_delete=models.CASCADE)
