from logging import PlaceHolder
from django import forms
from .models import Mascota, Eleccion_animal

class mascotaForm(forms.ModelForm):
    class Meta:
        model = Mascota
        fields = ['nombre', 'edad', 'domicilio', 'fecha_nacimiento', 'tipo_animal']

        labels = {
            'nombre': 'Nombre',
            'edad': 'Edad (Dejar en blanco si es que no se conoce)',
            'domicilio': 'Domicilio en donde se vive la mascota',
            'fecha_nacimiento': 'Fecha de nacimiento (Dejar en blanco si es que no se conoce)',
            'tipo_animal': 'Categoria de animal',

        }
        
        widgets = {
            'nombre': forms.TextInput(attrs={'class': 'form-control'}),
            'edad': forms.TextInput(attrs={'class': 'form-control'}),
            'domicilio': forms.TextInput(attrs={'class': 'form-control'}),
            'fecha_nacimiento': forms.DateInput(attrs={'class': 'form-control'}),
            'tipo_animal': forms.Select(choices="Eleccion_animal",attrs={'class': 'form-control'}),
        }