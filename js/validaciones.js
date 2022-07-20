const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("btn");
const msgError1 = document.getElementById("errorNombre");
const msgError2 = document.getElementById("errorEmail");
const msgError3 = document.getElementById("errorAsunto");
const msgError4 = document.getElementById("errorMensaje");
const errors = {};
const correoReg = new RegExp(
  "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
  "g"
);

const validarNombre = (e) => {
  e.preventDefault();

  if (!nombre.value) {
    errors.message = "El campo Nombre no puede estar vacio";
    msgError1.textContent = errors.message;
    return;
  } else if (nombre.value.length > 50) {
    errors.message = "Debe contener máximo 50 caracteres.";
    msgError1.textContent = errors.message;
    return;
  } else {
    msgError1.textContent = "";
    return nombre.value;
  }
};

const validarEmail = (e) => {
  e.preventDefault();

  if (!email.value) {
    errors.message = "El campo Email no puede estar vacio";
    msgError2.textContent = errors.message;
    return;
  } else if (!correoReg.test(email.value)) {
    errors.message = "El campo no tiene formato de Email";
    msgError2.textContent = errors.message;
    return;
  } else {
    msgError2.textContent = "";
    return email.value;
  }
};

const validarAsunto = (e) => {
  e.preventDefault();

  if (!asunto.value) {
    errors.message = "El campo Asunto no puede estar vacio";
    msgError3.textContent = errors.message;
    return;
  } else if (asunto.value.length > 50) {
    errors.message = "Debe contener máximo 50 caracteres.";
    msgError3.textContent = errors.message;
    return;
  } else {
    msgError3.textContent = "";
    return asunto.value;
  }
};

const validarMensaje = (e) => {
  e.preventDefault();

  if (!mensaje.value) {
    errors.message = "El campo Mensaje no puede estar vacio";
    msgError4.textContent = errors.message;
    return;
  } else if (mensaje.value.length > 300) {
    errors.message = "Debe contener máximo 300 caracteres.";
    msgError4.textContent = errors.message;
    return;
  } else {
    msgError4.textContent = "";
    return mensaje.value;
  }
};

const validarFormulario = (e) => {
  const a = validarNombre(e);
  const b = validarEmail(e);
  const c = validarAsunto(e);
  const d = validarMensaje(e);

  if (a !== undefined && b !== undefined && c !== undefined && d !== undefined)
    alert(
      "Nombre: " + a + ".\nEmail: " + b + ".\nAsunto: " + c + ".\nMensaje: " + d
    );

  document.getElementById("form-contact").reset();
};

btnEnviar.addEventListener("click", validarFormulario);
