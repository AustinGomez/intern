from jobs.serializers import JobSerializer
from jobs.models import Job
from rest_framework import viewsets
from users.permissions import IsAuthenticatedOrReadOnly


class JobViewSet(viewsets.ModelViewSet):
    serializer_class = JobSerializer
    queryset = Job.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]
