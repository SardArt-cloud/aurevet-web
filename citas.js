const formulario = document.getElementById("formCita");
const selectMascota = document.getElementById("mascota");
const datosNueva = document.getElementById("datosNueva");
const nombreMascota = document.getElementById("nombreMascota");
const peso = document.getElementById("peso");
const edad = document.getElementById("edad");
const edadValor = document.getElementById("edadValor");
const campoFecha = document.getElementById("fecha");
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

selectMascota.addEventListener("change", function()
  {
    if(selectMascota.value === "nueva")
      {
        datosNueva.hidden = false;
        nombreMascota.required = true;
        peso.required = true;
      }
      else
      {
      datosNueva.hidden = true;
      nombreMascota.required = false;
      peso.required = false;
      }
});

edad.addEventListener("input", function ()
{
  edadValor.textContent = edad.value;
});

formulario.addEventListener("submit", function (evento)
{
  evento.preventDefault();
  
  const fechaCita = new Date(campoFecha.value);
  const ahora = new Date();

  if(fechaCita < ahora)
  {
    mostrarError("La fecha y la hora no pueden ser anteriores a este momento.");
    return;
  }

  if(fechaCita.getDay() === 0)
  {
    mostrarError("No atendemos los domingos. Elige de lunes a sábado.");
    return;
  }

  const hora = fechaCita.getHours();
  if(hora < 8 || hora >= 18)
  {
    mostrarError("Atendemos de 8:00 am a 6:00 pm. Elige otra hora.");
    return;
  }

  if(selectMascota.value === "nueva" && nombreMascota.value.trim() === "")
  {
    mostrarError("Escribe el nombre de tu nueva mascota.");
    return;
  }

  mostrarExito("¡Cita agendada! Te confirmaremos por correo.");
  formulario.reset();
  datosNueva.hidden = true;
  edadValor.textContent = "1";
});