from companies.serializers import CompanySerializer, CompanySearchSerializer, CompanyAutoCompleteSerializer
from companies.models import Company
from rest_framework import viewsets
from rest_framework.decorators import action
from drf_haystack.viewsets import HaystackViewSet
from drf_haystack.filters import HaystackAutocompleteFilter


class CompanyViewSet(viewsets.ModelViewSet):
    serializer_class = CompanySerializer
    queryset = Company.objects.all()



class CompanySearchView(HaystackViewSet):
    index_models = [Company]
    serializer_class = CompanySearchSerializer


class CompanyAutocompleteSearchViewSet(HaystackViewSet):

    index_models = [Company]
    serializer_class = CompanyAutoCompleteSerializer
    filter_backends = [HaystackAutocompleteFilter]
