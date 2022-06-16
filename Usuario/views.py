from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import CreateView
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, UpdateView, DeleteView, DetailView
from .forms import RegistroForm

# Create your views here.
class RegistroUsuario(CreateView):
    model = User
    template_name = "core/registro.html"
    form_class = RegistroForm
    success_url = reverse_lazy('login')


class UserList(ListView):
    model = User
    template_name = 'Usuario/listar_usuario.html'





def home(request):
    return render(request,'core/home.html')

def jueguetes(request):
    return render(request,'core/jueguetes.html')

def formulario(request):
    return render(request,'core/formulario.html')

def comida(request):
    return render(request,'core/comida.html')

def collares(request):
    return render(request,'core/collares.html')

def api(request):
    return render(request,'core/api.html')
