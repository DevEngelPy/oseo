from rest_framework import viewsets
from tasks.serializer import TaskSerializer
from tasks.models import Task
# Create your views here.
class TaskViewSets(viewsets.ModelViewSet):
    queryset  = Task.objects.all()
    serializer_class = TaskSerializer 