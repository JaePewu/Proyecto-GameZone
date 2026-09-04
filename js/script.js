//Capturar elemtos de formulari
const formularioRegistro = document.getElementById("formularioRegistro");
const nombre = document.getElementById("nombre");
const errorNombre = document.getElementById("errorNombre");

const correo = document.getElementById("correo");
const errorCorreo = document.getElementById("errorCorreo");

//Validación
formularioRegistro.addEventListener("submit", function (event) {
  event.preventDefault();

  //Valores ingresados
  const valorNombre = nombre.value.trim();
  const valorCorreo = correo.value.trim();

  const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
  const formatoCorreo = /^[A-Za-z0-9._%+-]+@duoc\.cl$/i;

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

  // Validación correo electrónico
  if (valorCorreo === "") {
    errorCorreo.textContent = "El correo electrónico es obligatorio.";
  } else if (valorCorreo.length > 60) {
    errorCorreo.textContent = "No puedes superar los 60 caracteres.";
  } else if (!formatoCorreo.test(valorCorreo)) {
    errorCorreo.textContent = "Ingresa un correo válido.";
  } else {
    errorCorreo.textContent = "";
  }
});
