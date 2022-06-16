from django.urls import path, include
from . import views
from .views import RegistroUsuario, UserList, home
from django.contrib.auth.views import LoginView
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('registrar', RegistroUsuario.as_view(), name="registrar"),
    
    path('listar', UserList.as_view(), name="list_user"),
    
    path('login/', auth_views.LoginView.as_view(template_name='core/login.html'), name='login'),
    
    path('home', home,name="home"),
    path('jueguetes',views.jueguetes,name="jueguetes"),
    path('formulario',views.formulario,name="formulario"),
    path('comida',views.comida,name="comida"),
    path('collares',views.collares,name="collares"),
    path('api',views.api,name="api"),

]
