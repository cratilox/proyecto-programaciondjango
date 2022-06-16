




$(document).ready(function() {
    $("#form_registro").validate({
      rules: {
        nombre : {
          required: true,
          minlength: 3,
          maxlength: 20
        },
        correo: {
          required: true,
          email: true
        },
        nombreuser:{
          required: true,
          minlength: 6,
          maxlength: 10
        },
        contraseña:{
          required: true,
          minlength: 7,
          maxlength: 15
        },
      },
      messages : {
        nombre: {
          required:"Este campo es obligatorio",    
          minlength: "Minimo 3 caracteres",
          maxlength: "Maximo 20 caracteres"
        },
        correo: {
          required: "Este campo es obligatorio",
          email: "Debe tener sintaxis de email"
        },
        nombreuser:{
          required: "Este campo es obligatorio",
          minlength: "Minimo 6 caracteres",
          maxlength: "Maximo 10 caracteres"
        },
        contraseña:{
          required: "Este campo es obligatorio",
          minlength: "Minimo 7 caracteres",
          maxlength: "Maximo 15 caracteres"
        },
      }
    });
  });

