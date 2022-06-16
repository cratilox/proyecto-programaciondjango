from django.shortcuts import render
from django.urls import reverse_lazy
from .models import Mascota
from .forms import mascotaForm
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
# Create your views here.

class MascotaCreate(CreateView):
    model = Mascota
    form_class = mascotaForm
    template_name = 'core/añadir_mascotas.html'
    success_url = reverse_lazy('list_mascota')
    
class MascotaUpdate(UpdateView):
    model = Mascota
    form_class = mascotaForm
    template_name = 'core/añadir_mascotas.html'
    success_url = reverse_lazy('list_mascota')

class MascotaList(ListView):
    model = Mascota
    template_name = 'core/listar_mascotas.html'
    # paginate_by = 4

class MascotaDelete(DeleteView):
    model = Mascota
    template_name = 'core/borrar_mascota.html'
    success_url = reverse_lazy('list_mascota')