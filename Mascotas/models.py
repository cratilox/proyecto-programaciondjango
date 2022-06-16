from pickle import FALSE
from django.db import models

# Create your models here.

Eleccion_animal = (
    ('Desconocido', 'Desconocido'),
    ('Pajaro', 'Pajaro'),
    ('Gato', 'Gato'),
    ('Perro', 'Perro'),
    ('Conejo', 'Conejo'),
    ('Huron', 'Huron'),
    ('Reptil', 'Reptil'),
    ('Otro', 'Otro'),
)

class Mascota(models.Model):
    nombre = models.CharField(max_length=50, null=False)
    edad = models.IntegerField(null=True,blank=True)
    domicilio = models.CharField(max_length=50, null=False)
    fecha_registro = models.DateTimeField(auto_now=True)
    fecha_nacimiento = models.DateField(null=True, blank=True)
    tipo_animal = models.CharField(max_length=20, choices=Eleccion_animal, default='Sin categoria')

    def __str__(self):
        return self.nombre