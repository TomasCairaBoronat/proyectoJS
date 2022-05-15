
//Declaracion de shortcuts

// localStorage.clear()
let espacio = " ";
const select  = el => document.querySelector(el);
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
const guardarSession = (clave, valor) => { sessionStorage.setItem(clave, valor) };
const obtenerLocal = (valor) => JSON.parse(localStorage.getItem(valor))
const getComicsFromCart = () => JSON.parse(localStorage.getItem("comicsAlmacenados")) || [];
const findComics = () => comicsAlmacenados.find( comicCarrito => comicCarrito.id == comic.id);
function mostrarToast (texto) {
  Toastify({
    gravity: "top",
    position: "center",
    text: texto,
    style: {
      color: 'black',
      background: "linear-gradient(to right, #ff3e3e, #fe3d3d)",
    },
    duration: 3000
    }).showToast();
}

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

let usuarioAlmacenado = JSON.parse(localStorage.getItem("usuarioAlmacenado")) || [];
if (usuarioAlmacenado != []){
  usuario = usuarioAlmacenado;
  const { nombre : nombreUsuario ,apellido : apellidoUsuario,edad : edadUsuario,mail : mailUsuario } = usuario
  if (usuario != ""){
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

function validarFormulario(e){
  //Cancelamos el comportamiento del evento
  e.preventDefault();
  let nombreUpper = dataUsuario[0].value.toUpperCase();
  
  let apellidoUpper = dataUsuario[1].value.toUpperCase();
  
  let edadInt = parseInt(dataUsuario[2].value);
  
  let mailLower = dataUsuario[3].value.toLowerCase();
  
  let usuario = { nombre: nombreUpper, apellido: apellidoUpper,edad: edadInt, mail: mailLower};

  //Desestructuracion de usuario
  const { nombre : nombreUsuario ,apellido : apellidoUsuario,edad : edadUsuario,mail : mailUsuario } = usuario

  //Storage
  guardarLocal("usuarioAlmacenado", JSON.stringify(usuario));
  

  if (usuario != ""){
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
//Comics
const comicsDisponibles = [];
const comicsCarrito = [];
const botonFlexFlow = [];

//Pedir comics desde archivo.json
const pedirComics = async () => {
  const resp = await fetch('./script/datos_comics.json')
  const comics = await resp.json()
 
  for (let comic of comics) {
    let card = document.createElement("div");
    card.setAttribute("class","card col-md-4 col-lg-3 mx-2 my-2");
    card.setAttribute("style","width: 18rem;");
  
    //Desestructuracion de comics
    const {id,titulo,descripcion,precio,image} = comic
  
    card.innerHTML = `
    
                  <img src="${image}" class="card-img-top" height="300px" width="auto" alt="${titulo}">
    
                  <div class="card-body">
    
                    <p class="card-title titulosComics" id="tituloProd1"><strong>${titulo}</strong></p>
    
                    <p class="card-text" id="descriptionProd1"><strong>${descripcion}</strong></p>
    
                    <div class="flowComic${id}">
                    
                        <p class="card-text precioProd${id} textoPrecioProd"><strong><span id="precioProd1">${precio}</span>€</strong></p>
    
                      <div   id="boton">
    
                        <button type="submit" id="botonComic${id}" class="btn botonProducto">Add to cart</button>
    
    
                      </div>
    
                      
    
                    </div>
    
                  </div>`;
    
    
    select(".comicsHTML").appendChild(card);
    
    
  
    //BotonComic
    let botonComic = select(`#botonComic${comic.id}`);
    botonComic.onclick = () => {
      
      const comicsAlmacenados = getComicsFromCart();
      
      const comicEnCarrito = comicsAlmacenados.find( comicCarrito => comicCarrito.id == comic.id);
  
      if (comicEnCarrito) {
        if(comicEnCarrito.cantidad < 10){
          comicEnCarrito.cantidad++;
          botonComic.innerHTML = `Added X${comicEnCarrito.cantidad}`
      
          setTimeout(() => {
            botonComic.innerHTML = `Add to cart`
          },1000)
          mostrarToast(`Agregado a carrito: ${titulo} x${comicEnCarrito.cantidad}!`) 
        }else{
          botonComic.innerHTML = `Maxed out`
      
          setTimeout(() => {
            botonComic.innerHTML = `Add to cart`
          },1000)
  
          mostrarToast(`Ha llegado al limite maximo de 10 unidades`)
        }
  
        
      } else {
        comic.cantidad = 1;
        comicsAlmacenados.push(comic);
  
        botonComic.innerHTML = `Added X 1`
      
        setTimeout(() => {
          botonComic.innerHTML = `Add to cart`
        },1000)
  
        mostrarToast(`Agregado a carrito: ${titulo} x1!`)
      }
  
      guardarLocal("comicsAlmacenados",JSON.stringify(comicsAlmacenados));
    }
  
    
  }
}
pedirComics()


//Carrito

let carrito = select("#Carrito");

carrito.onclick = () => {

  let resumenCompra = select("#resumenCompra");

  resumenCompra.innerHTML = '';

  const comicsAlmacenados = getComicsFromCart();
  
  for (let comicAlmacenado of comicsAlmacenados ){
    const { titulo, precio, cantidad,id } = comicAlmacenado;
    
    let liComic = document.createElement("li");
     liComic.innerHTML = `
    
    <strong>${titulo}:</strong> 
    <strong>${precio}€</strong> 

    <div class="container">
      <input type="button" onclick="decrement(${id})" value="-" />
      <span id="cantidad${id}">${cantidad}</span>
      <input type="button" onclick="increment(${id})" value="+" />
    </div>
    `;
    resumenCompra.append(liComic);
    
    comicsCarrito.push(comicAlmacenado);
    
  }  
  
}

//value1
function increment(id) {
  comicsAlmacenados = getComicsFromCart();
  const comic = comicsAlmacenados.find( comic => comic.id === id);
  if (comic.cantidad < 10) comic.cantidad++;
  guardarComicsEnStorage(comicsAlmacenados);
  select(`#cantidad${id}`).innerText = comic.cantidad;
}


function decrement(id) {
  comicsAlmacenados = getComicsFromCart();
  const comic = comicsAlmacenados.find( comic => comic.id === id);
  if (comic.cantidad > 0) comic.cantidad--;
  guardarComicsEnStorage(comicsAlmacenados);
  select(`#cantidad${id}`).innerText = comic.cantidad;
}

function guardarComicsEnStorage(comics) {
  localStorage.setItem("comicsAlmacenados", JSON.stringify(comics));
}

//resumen
const options = {
  style: 'currency',
  currency: 'EUR'
}
const formatPrice = price => price.toLocaleString('es-ES');

function calcularPorcentaje (porcentaje) {
  return function (precio) {
    let calculoPorcentaje = (precio * porcentaje) / 100;
    return precio += calculoPorcentaje;
  }
}
// //Funcion Precio
let botonResumen = select("#resumen");
botonResumen.onclick = () =>{
  comicsAlmacenados = getComicsFromCart();
  let precioTotalCompra = comicsAlmacenados.reduce((acc,el) => acc + (el.precio * el.cantidad),0);

  if (precioTotalCompra != 0){
     let descuento10 = calcularPorcentaje(-10);
    
        let precioConDescuento = descuento10(precioTotalCompra) ;
    
        let iva = calcularPorcentaje(21);
    
        let precioFinal = iva(precioConDescuento);
        
        select("#descuentos").innerHTML = `<p><strong>10% off: ${formatPrice(precioTotalCompra * 0.10)}€</strong></p>`;
        
        
        select("#impuestos").innerHTML = `<p><strong>IVA (21%): ${formatPrice(precioTotalCompra * 0.21)}€</strong></p>`;
        
        
        select("#totalPrecio").innerHTML = `<p><strong>${formatPrice(precioFinal)}€</strong></p>`;
   }else{
    select("#descuentos").innerHTML = `<p><strong>10% off: 0€</strong></p>`;
        
        
    select("#impuestos").innerHTML = `<p><strong>IVA (21%): 0€</strong></p>`;
    
    
    select("#totalPrecio").innerHTML = `<p><strong>0€</strong></p>`;
   }   
}

//Formulario Contacto

(function() {
  emailjs.init('taN9cOyfefYfoC2Xw');
})();
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      this.contact_number.value = Math.random() * 100000 | 0;
      emailjs.sendForm('service_Tony', 'contact_form', this)
      .then( () => {
        Swal.fire({
          icon: 'success',
          title: 'Formulario enviado correctamente!',
          confirmButtonColor: "#ff3e3e",
          })
      }).catch( ()=>{
          Swal.fire({
            icon: 'error',
            title: 'Hubo un error con el servidor, intenta nuevamente mas tarde',
            confirmButtonColor: "#ff3e3e",
            })
        }
       );
    });
  }
  


