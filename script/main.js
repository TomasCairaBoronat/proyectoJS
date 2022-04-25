
//Declaracion de shortcuts

let espacio = " ";
const select  = el => document.querySelector(el);

// Chequeo mail
const mailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


let form1 = select("#form1")

form1.addEventListener("submit", validarFormulario);

let submitBoton = select("#submit");

let registroForm = select("registroUsuario");



//data usuario

let dataUsuario = document.getElementsByClassName("dataUsuario");
let encabezadoModal = select(".encabezadoModals")
let footerModal = select(".footerModals")

function validarFormulario(e){
  //Cancelamos el comportamiento del evento
  e.preventDefault();
  let nombreUpper = dataUsuario[0].value.toUpperCase();
  
  let apellidoUpper = dataUsuario[1].value.toUpperCase();
  
  let edadInt = parseInt(dataUsuario[2].value);
  
  let mailLower = dataUsuario[3].value.toLowerCase();
  
  let usuario = { nombre: nombreUpper, apellido: apellidoUpper,edad: edadInt, mail: mailLower}
  
  let nombreYapellido = `${usuario.nombre}  ${usuario.apellido}`

  if (usuario != ""){
    console.log(usuario);
    encabezadoModal.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">Perfil de ${nombreYapellido}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`
    select("#datosIngresadosUsuario").innerHTML = `<p><strong>Nombre:</strong> ${usuario.nombre}</p>
    <p><strong>Apellido:</strong> ${usuario.apellido}</p>
    <p><strong>edad:</strong> ${usuario.edad}</p>
    <p><strong>Correo Electronico:</strong> ${usuario.mail}</p>`
    
    form1.innerHTML = `<!-- <section class="container registroUsuario" >
    <label for="nombreUsuario" class="form-label"><strong>Nombre:</strong></label>
    <input class="form-control dataUsuario" id="nombreUsuario" type="text" placeholder="Ingrese su nombre" aria-label="default input example">
    <label for="apellidoUsuario" class="form-label"><strong>Apellido:</strong></label>
    <input class="form-control dataUsuario" id="apellidoUsuario" type="text" placeholder="Ingrese su apellido" aria-label="default input example">
    <label for="edadUsuario" class="form-label"><strong>Edad:</strong></label>
    <input class="form-control dataUsuario" id="edadUsuario" type="text" placeholder="Ingrese su edad" aria-label="default input example">
    <label for="mailUsuario" class="form-label"><strong>Correo electronico:</strong></label>
    <input type="email " class="form-control dataUsuario" id="mailUsuario" placeholder="nombre@mail.com">
    </section> -->`
    
    footerModal.innerHTML = `<button type="submit"  class="btn botones" id="submit" disabled>Registrado!</button>
    <button type="button" class="btn botones" data-bs-dismiss="modal">Cerrar</button>`
  }
}

const comicsPrecio = []
const comics = []
//Comics
let resumenCompra = select("#resumenCompra")
//comic1
let botonComic1 = select("#botonComic1")
botonComic1.onclick = () => {
  let tituloComic1 = select("#tituloProd1")
  let precioComic1 = select("#precioProd1")
  let precioEnteroComic1 = select("#precioEnteroProd1")
  let comic1 = {titulo: tituloComic1.innerText, precio: precioComic1.innerText}
  comics.push(comic1)
  comicsPrecio.push(parseInt(comic1.precio))
  let liComic1 = document.createElement("li");
  liComic1.innerHTML = `<strong>${comic1.titulo}:</strong>${precioEnteroComic1.innerHTML}`
  resumenCompra.append(liComic1)
}
//comic2
let botonComic2 = select("#botonComic2")
botonComic2.onclick = () => {
  let tituloComic2 = select("#tituloProd2")
  let precioComic2 = select("#precioProd2")
  let precioEnteroComic2 = select("#precioEnteroProd2")
  let comic2 = {titulo: tituloComic2.innerText, precio: precioComic2.innerText}
  comics.push(comic2)
  comicsPrecio.push(parseInt(comic2.precio))
  let liComic2 = document.createElement("li");
  liComic2.innerHTML = `<strong>${comic2.titulo}:</strong>${precioEnteroComic2.innerHTML}`
  resumenCompra.append(liComic2)
}
//comic3
let botonComic3 = select("#botonComic3")
botonComic3.onclick = () => {
  let tituloComic3 = select("#tituloProd3")
  let precioComic3 = select("#precioProd3")
  let precioEnteroComic3 = select("#precioEnteroProd3")
  let comic3 = {titulo: tituloComic3.innerText, precio: precioComic3.innerText}
  comics.push(comic3)
  comicsPrecio.push(parseInt(comic3.precio))
  let liComic3 = document.createElement("li");
  liComic3.innerHTML = `<strong>${comic3.titulo}:</strong>${precioEnteroComic3.innerHTML}`
  resumenCompra.append(liComic3)
}
//comic4
let botonComic4 = select("#botonComic4")

botonComic4.onclick = () => {
  let tituloComic4 = select("#tituloProd4")
  let precioComic4 = select("#precioProd4")
  let precioEnteroComic4 = select("#precioEnteroProd4")
  let comic4 = {titulo: tituloComic4.innerText, precio: precioComic4.innerText}
  comics.push(comic4)
  comicsPrecio.push(parseInt(comic4.precio))
  let liComic4 = document.createElement("li");
  liComic4.innerHTML = `<strong>${comic4.titulo}:</strong>${precioEnteroComic4.innerHTML}`
  resumenCompra.append(liComic4)
  
}
console.log(comicsPrecio);
console.log(comics)

const options = {
  style: 'currency',
  currency: 'ARS'
}
const formatPrice = price => price.toLocaleString('es-AR', options);

function calcularPorcentaje (porcentaje) {
  return function (precio) {
    let calculoPorcentaje = (precio * porcentaje) / 100;
    return precio += calculoPorcentaje;
  }
}

// //Funcion Precio
let precioTotalCompra = comics.reduce((acc,el) => acc + parseInt(el.precio),0)

while (precioTotalCompra != 0){

   let descuento10 = calcularPorcentaje(-10);
  
      let precioConDescuento = descuento10(precioTotalCompra) ;
  
      let iva = calcularPorcentaje(21);
  
      let precioFinal = iva(precioConDescuento);
      
      console.log("Precio total:" + espacio + formatPrice(precioFinal));
      let carrito = document.querySelector("#resumenCompra")
      
      select("#descuentos").innerHTML = `<p>10% off: ${formatPrice(precioTotalCompra * 0.10)}</p>`;
      
      
      select("#impuestos").innerHTML = `<p>IVA: ${formatPrice(precioTotalCompra * 0.21)}</p>`;
      
      
      select("#totalPrecio").innerHTML = `<p>${formatPrice(precioFinal)}</p>`
 }   



