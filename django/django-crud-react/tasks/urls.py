from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from tasks import views

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskViewSets)

urlpatterns = [
    path('api/v1/', include(router.urls), name='api'),
    path('docs/', include_docs_urls(title='Task Api')),
    
]
