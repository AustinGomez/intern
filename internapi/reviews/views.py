from reviews.serializers import ReviewSerializer
from reviews.models import Review
from rest_framework import viewsets
from rest_framework import filters

class ReviewViewSet(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all().select_related(
        'job_id',
        'company_id'
    )
    filter_backends = [filters.OrderingFilter]