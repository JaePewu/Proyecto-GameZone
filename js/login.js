//Elementos de formulario
const formularioLogin = document.getElementById("formularioLogin");

const correoLogin = document.getElementById("correoLogin");
const errorCorreoLogin = document.getElementById("errorCorreoLogin");

const contrasenaLogin = document.getElementById("contrasenaLogin");
const errorContrasenaLogin = document.getElementById("errorContrasenaLogin");

//Validación
formularioLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  //Valores ingresados
  const valorCorreoLogin = correoLogin.value.trim().toLowerCase();
  const valorContrasenaLogin = contrasenaLogin.value;

  //Validación correo
  if (valorCorreoLogin === "") {
    errorCorreoLogin.textContent = "El correo electrónico es obligatorio.";
  } else {
    errorCorreoLogin.textContent = "";
  }

  //Validación contraseña
  if (valorContrasenaLogin === "") {
    errorContrasenaLogin.textContent = "La contraseña es obligatoria.";
  } else {
    errorContrasenaLogin.textContent = "";
  }

  //Comprobar datos de sesión
  if (
    errorCorreoLogin.textContent === "" &&
    errorContrasenaLogin.textContent === ""
  ) {
    const usuarioGuardado = localStorage.getItem("usuario_" + valorCorreoLogin);

    if (usuarioGuardado === null) {
      errorCorreoLogin.textContent =
        "El correo electrónico no está registrado.";
    } else {
      const usuario = JSON.parse(usuarioGuardado);

      if (usuario.contrasena !== valorContrasenaLogin) {
        errorContrasenaLogin.textContent = "La contraseña es incorrecta.";
      } else {
        errorContrasenaLogin.textContent = "";

        alert("Inicio de sesión exitoso.");
      }
    }
  }
});
