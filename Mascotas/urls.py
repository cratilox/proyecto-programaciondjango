from django.urls import path, include
from . import views

urlpatterns = [
    
    # CLASES GENERICAS
    path('add_mascota', views.MascotaCreate.as_view(), name="add_mascota"),
    
    path('edit_mascota/<int:pk>', views.MascotaUpdate.as_view(), name='edit_mascota'),
    
    path('list_mascota', views.MascotaList.as_view(), name="list_mascota"),
    
    path('delete_mascota/<int:pk>', views.MascotaDelete.as_view(), name="delete_mascota"),
    ]