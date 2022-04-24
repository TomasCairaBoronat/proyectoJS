
//Declaracion de shortcuts

let espacio = " ";
const select  = el => document.querySelector(el);

// Chequeo mail
const mailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// Metodos de validacion de datos ingresados.
const validacionUsuarios = {

  nombre: (input) => input.length < 3,
  
  apellido: (input) => input.length < 3,

  edad: (input) => isNaN(input) || input > 100 || input == "" ,

  mail: (input) => !input.match(mailRegEx)
}

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

  if (usuario !== ""){
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
    
    footerModal.innerHTML = `<button type="submit"  class="btn botones" id="submit" disabled>Registrado</button>
    <button type="button" class="btn botones" data-bs-dismiss="modal">Cerrar</button>`
  }
}

//Comics


// Array de datos comics:
const datosComic = ['titulo', 'precio'];

// Array donde ir guardando los comics:
const comics = [];

// Indice del array de comics:
let indexComic = 0;

// Clase Comic:
class Comic {
  
  constructor (titulo,precio) {
    
    this.titulo = titulo;

    this.precio = precio;

  }
  
  mostrarDataComic() {
    alert(
      'Titulo: ' + this.titulo + '\n' + 
      'Precio: ' + "$"+ this.precio
    )
  }
  pasarAMayuscula(){
    this.titulo = this.titulo.toUpperCase();
  }
}

// Metodos de validacion de datos ingresados.
const validacionComics = {

  titulo: (input) => input.length < 3,

  precio: (input) => isNaN(input) || input <= 0,

}

// Funcion para ingresar datos de comic:
function ingresarDataComic(datosComic) {

  let input;
  
  do {
    input = prompt("Ingrese su " + datosComic)

  } while (validacionComics[datosComic](input));
  
  return input
}

// Funcion para crear un nuevo comic:
function crearComic() {

  comics[indexComic] = new Comic();

  
  datosComic.forEach((datoComic) => {
    comics[indexComic][datoComic] = ingresarDataComic(datoComic)
  })

  comics[indexComic].pasarAMayuscula();

  indexComic++
}

// do { 
//   crearComic()

// } while (confirm("Desea ingresar otro producto?"));;
// comics.forEach((el) =>{
//   console.log('Titulo: ' + el.titulo + '\n' + 
// 'Precio: ' + "$"+ el.precio)
// })

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

let precioTotalCompra = comics.reduce((acc,el) => acc + parseInt(el.precio),0)


// //Funcion Precio

 if (precioTotalCompra != 0){
   
   let descuento10 = calcularPorcentaje(-10);
  
      let precioConDescuento = descuento10(precioTotalCompra) ;
  
      let iva = calcularPorcentaje(21);
  
      let precioFinal = iva(precioConDescuento);
      
      console.log("Precio total:" + espacio + formatPrice(precioFinal));
      let carrito = document.querySelector("#resumenCompra")
      for (const comic of comics) {
        let li = document.createElement("li");
        li.innerHTML = `${comic.titulo}: $${comic.precio}`;
        carrito.append(li);
      }
      
      select("#descuentos").innerHTML = `<p>10% off: ${formatPrice(precioTotalCompra * 0.10)}</p>`;
      
      
      select("#impuestos").innerHTML = `<p>IVA: ${formatPrice(precioTotalCompra * 0.21)}</p>`;
      
      
      select("#totalPrecio").innerHTML = `<p>${formatPrice(precioTotalCompra)}</p>`
 }   



