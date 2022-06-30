from django.urls import path, include
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    
    # CLASES GENERICAS
    path('add_mascota', views.MascotaCreate.as_view(), name="add_mascota"),
    
    path('edit_mascota/<int:pk>', views.MascotaUpdate.as_view(), name='edit_mascota'),
    
    path('list_mascota', views.MascotaList.as_view(), name="list_mascota"),
    
    path('delete_mascota/<int:pk>', views.MascotaDelete.as_view(), name="delete_mascota"),
    
    # api
    
    path('api/', views.API_objects.as_view()),
    path('api/<int:pk>/', views.API_objects_details.as_view()),
    ]

urlpatterns += format_suffix_patterns(urlpatterns)