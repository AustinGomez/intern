from reviews.serializers import ReviewSerializer
from reviews.models import Review
from rest_framework import viewsets
from rest_framework import filters
from users.permissions import IsAuthenticatedOrReadOnly


class ReviewViewSet(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all().select_related(
        'job',
        'company'
    )
    filter_backends = [filters.OrderingFilter]
    permission_classes = [IsAuthenticatedOrReadOnly]

