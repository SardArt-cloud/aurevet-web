//Declaración de variables
const formulario = document.getElementById("formContacto");
const comentario = document.getElementById("comentario");
const cuenta = document.getElementById("cuenta");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");

function mostrarError(texto)
{
  mensaje.textContent = texto;
  mensaje.className = "error";
}

function mostrarExito(texto)
{
  mensaje.textContent = texto;
  mensaje.className = "exito";
}

comentario.addEventListener("input", function ()
{
  cuenta.textContent = comentario.value.length;
});

formulario.addEventListener("submit", function (evento)
{
  evento.preventDefault();

  if (comentario.value.trim().length < 10)
  {
    mostrarError("Escribe un mensaje de al menos 10 caracteres.");
    return;
  }

  if (asunto.value === "urgencia")
  {
    mostrarError("Para una urgencia, acércate a la clínica o llámanos. Este formulario no se atiende de inmediato.");
    return;
  }

  mostrarExito("¡Mensaje enviado! Te responderemos por correo pronto.");
  formulario.reset();
  cuenta.textContent = "0";
});