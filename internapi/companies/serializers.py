from rest_framework import serializers
from companies.models import Company
from drf_haystack.serializers import HaystackSerializerMixin, HaystackSerializer
from companies.search_indexes import CompanyIndex


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'
        lookup_field = 'slug'


class CompanySearchSerializer(HaystackSerializerMixin, CompanySerializer):
    class Meta(CompanySerializer.Meta):
        search_fields = ('name',)


class CompanyAutoCompleteSerializer(HaystackSerializer):
    class Meta:
        index_classes = [CompanyIndex]
        fields = [
            "name_auto",
            "name",
            "hq_city",
            "hq_country",
            "hq_region",
            "avg_rating",
            "total_rating",
            "slug",
            "logo_url"
        ]
        ignore_fields = ["name_auto"]

        field_aliases = {
            "q": "name_auto"
        }
