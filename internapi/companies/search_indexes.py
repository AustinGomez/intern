import datetime
from haystack import indexes
from companies.models import Company


class CompanyIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.CharField(document=True, use_template=False)
    name = indexes.CharField(model_attr="name")
    hq_city = indexes.CharField(model_attr="hq_city", null=True)
    hq_country = indexes.CharField(model_attr="hq_country", null=True)
    hq_region = indexes.CharField(model_attr="hq_region", null=True)

    slug = indexes.CharField(model_attr="slug", indexed=False)
    avg_rating = indexes.FloatField(model_attr="avg_rating", indexed=False, null=True)
    total_rating = indexes.FloatField(model_attr="total_rating", indexed=False, null=True)
    logo_url = indexes.CharField(model_attr="logo_url", indexed=False, null=True)
    modified_date = indexes.DateTimeField(model_attr="modified_date", indexed=False)
    total_rating = indexes.IntegerField(model_attr="user_reviews_count", indexed=False, null=True)

    name_auto = indexes.EdgeNgramField()

    @staticmethod
    def prepare_name_auto(obj):
        # return obj.name
        fields = [obj.name, obj.hq_city, obj.hq_country, obj.hq_region]
        return " ".join(item for item in fields if item)

    def get_model(self):
        return Company

    def index_queryset(self, using=None):
        return self.get_model().objects.all()