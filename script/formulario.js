//Formulario usuario

let form1 = select("#form1");

form1.addEventListener("submit", validarFormulario);

let submitBoton = select("#submit");

let registroForm = select("registroUsuario");

//data usuario

let dataUsuario = document.getElementsByClassName("dataUsuario");
let encabezadoModal = select(".encabezadoModals");
let footerModal = select(".footerModals");

//Storage

let usuarioAlmacenado = obtenerLocal("usuarioAlmacenado") || [];
if (usuarioAlmacenado != []) {
  usuario = usuarioAlmacenado;
  const { nombre: nombreUsuario, apellido: apellidoUsuario, edad: edadUsuario, mail: mailUsuario } = usuario
  if (usuario != "") {
    encabezadoModal.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">Perfil de ${nombreUsuario} ${apellidoUsuario}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`
    select("#datosIngresadosUsuario").innerHTML = `<p><strong>Nombre:</strong> ${nombreUsuario}</p>
    <p><strong>Apellido:</strong> ${apellidoUsuario}</p>
    <p><strong>Edad:</strong> ${edadUsuario}</p>
    <p><strong>Correo Electronico:</strong> ${mailUsuario}</p>`;

    form1.innerHTML = `<!-- <section class="container registroUsuario" >
    <label for="nombreUsuario" class="form-label"><strong>Nombre:</strong></label>
    <input class="form-control dataUsuario" id="nombreUsuario" type="text" placeholder="Ingrese su nombre" aria-label="default input example">
    <label for="apellidoUsuario" class="form-label"><strong>Apellido:</strong></label>
    <input class="form-control dataUsuario" id="apellidoUsuario" type="text" placeholder="Ingrese su apellido" aria-label="default input example">
    <label for="edadUsuario" class="form-label"><strong>Edad:</strong></label>
    <input class="form-control dataUsuario" id="edadUsuario" type="text" placeholder="Ingrese su edad" aria-label="default input example">
    <label for="mailUsuario" class="form-label"><strong>Correo electronico:</strong></label>
    <input type="email " class="form-control dataUsuario" id="mailUsuario" placeholder="nombre@mail.com">
    </section> -->`;

    footerModal.innerHTML = `<button type="submit"  class="btn botones" id="submit" disabled>Registrado!</button>
    <button type="button" class="btn botones" data-bs-dismiss="modal">Cerrar</button>`;
  }
}

//formulario usuario

function validarFormulario(e) {
  //Cancelamos el comportamiento del evento
  e.preventDefault();
  let nombreUpper = dataUsuario[0].value.toUpperCase();

  let apellidoUpper = dataUsuario[1].value.toUpperCase();

  let edadInt = parseInt(dataUsuario[2].value);

  let mailLower = dataUsuario[3].value.toLowerCase();

  let usuario = { nombre: nombreUpper, apellido: apellidoUpper, edad: edadInt, mail: mailLower };

  //Desestructuracion de usuario
  const { nombre: nombreUsuario, apellido: apellidoUsuario, edad: edadUsuario, mail: mailUsuario } = usuario

  //Storage
  guardarLocal("usuarioAlmacenado", JSON.stringify(usuario));


  if (usuario != "") {
    encabezadoModal.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">Perfil de ${nombreUsuario} ${apellidoUsuario}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`
    select("#datosIngresadosUsuario").innerHTML = `<p><strong>Nombre:</strong> ${nombreUsuario}</p>
    <p><strong>Apellido:</strong> ${apellidoUsuario}</p>
    <p><strong>Edad:</strong> ${edadUsuario}</p>
    <p><strong>Correo Electronico:</strong> ${mailUsuario}</p>`;

    form1.innerHTML = `<!-- <section class="container registroUsuario" >
    <label for="nombreUsuario" class="form-label"><strong>Nombre:</strong></label>
    <input class="form-control dataUsuario" id="nombreUsuario" type="text" placeholder="Ingrese su nombre" aria-label="default input example">
    <label for="apellidoUsuario" class="form-label"><strong>Apellido:</strong></label>
    <input class="form-control dataUsuario" id="apellidoUsuario" type="text" placeholder="Ingrese su apellido" aria-label="default input example">
    <label for="edadUsuario" class="form-label"><strong>Edad:</strong></label>
    <input class="form-control dataUsuario" id="edadUsuario" type="text" placeholder="Ingrese su edad" aria-label="default input example">
    <label for="mailUsuario" class="form-label"><strong>Correo electronico:</strong></label>
    <input type="email " class="form-control dataUsuario" id="mailUsuario" placeholder="nombre@mail.com">
    </section> -->`;

    footerModal.innerHTML = `<button type="submit"  class="btn botones" id="submit" disabled>Registrado!</button>
    <button type="button" class="btn botones" data-bs-dismiss="modal">Cerrar</button>`;
  }


}