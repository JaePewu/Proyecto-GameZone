//Elementos de formulario
const formularioRegistro = document.getElementById("formularioRegistro");
const nombre = document.getElementById("nombre");
const errorNombre = document.getElementById("errorNombre");

const correo = document.getElementById("correo");
const errorCorreo = document.getElementById("errorCorreo");

const contrasena = document.getElementById("contrasena");
const errorContrasena = document.getElementById("errorContrasena");

const confirmarContrasena = document.getElementById("confirmarContrasena");
const errorConfirmarContrasena = document.getElementById(
  "errorConfirmarContrasena",
);

const telefono = document.getElementById("telefono");
const errorTelefono = document.getElementById("errorTelefono");

//Validación
formularioRegistro.addEventListener("submit", function (event) {
  event.preventDefault();

  //Valores ingresados
  const valorNombre = nombre.value.trim();
  const valorCorreo = correo.value.trim();
  const valorContrasena = contrasena.value;
  const valorConfirmarContrasena = confirmarContrasena.value;
  const valorTelefono = telefono.value.trim();

  const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
  const formatoCorreo = /^[A-Za-z0-9._%+-]+@duoc\.cl$/i;
  const tieneMayuscula = /[A-Z]/;
  const tieneMinuscula = /[a-z]/;
  const tieneNumero = /[0-9]/;
  const tieneEspecial = /[@#$%!]/;
  const formatoTelefono = /^[0-9]{9}$/;

  // Validación nombre completo
  if (valorNombre === "") {
    errorNombre.textContent = "El nombre completo es obligatorio!!";
  } else if (!soloLetras.test(valorNombre)) {
    errorNombre.textContent = "Soló puede contener letras y espacios!!";
  } else if (valorNombre.length > 100) {
    errorNombre.textContent =
      "El nombre no puede superar los 100 caracteres!!!";
  } else {
    errorNombre.textContent = "";
  }

  //Validación correo electrónico
  if (valorCorreo === "") {
    errorCorreo.textContent = "El correo electrónico es obligatorio.";
  } else if (valorCorreo.length > 60) {
    errorCorreo.textContent = "No puedes superar los 60 caracteres.";
  } else if (!formatoCorreo.test(valorCorreo)) {
    errorCorreo.textContent = "Ingresa un correo válido.";
  } else {
    errorCorreo.textContent = "";
  }

  //Validación de contraseña
  if (valorContrasena === "") {
    errorContrasena.textContent = "La contraseña es obligatoria.";
  } else if (valorContrasena.length < 10) {
    errorContrasena.textContent =
      "La contraseña debe tener al menos 10 caracteres.";
  } else if (!tieneMayuscula.test(valorContrasena)) {
    errorContrasena.textContent =
      "La contraseña debe incluir al menos una letra mayúscula.";
  } else if (!tieneMinuscula.test(valorContrasena)) {
    errorContrasena.textContent =
      "La contraseña debe incluir al menos una letra minúscula.";
  } else if (!tieneNumero.test(valorContrasena)) {
    errorContrasena.textContent =
      "La contraseña debe incluir al menos un número.";
  } else if (!tieneEspecial.test(valorContrasena)) {
    errorContrasena.textContent =
      "La contraseña debe incluir un carácter especial (@, #, $, % o !).";
  } else {
    errorContrasena.textContent = "";
  }

  // Validación  para confirmar contraseña
  if (valorConfirmarContrasena === "") {
    errorConfirmarContrasena.textContent = "Debes confirmar la contraseña.";
  } else if (valorConfirmarContrasena !== valorContrasena) {
    errorConfirmarContrasena.textContent = "Las contraseñas no coinciden.";
  } else {
    errorConfirmarContrasena.textContent = "";
  }

  //Validación de n° teléfono
  if (valorTelefono === "") {
    errorTelefono.textContent = "";
  } else if (!formatoTelefono.test(valorTelefono)) {
    errorTelefono.textContent = "El teléfono debe contener 9 números.";
  } else {
    errorTelefono.textContent = "";
  }
});
