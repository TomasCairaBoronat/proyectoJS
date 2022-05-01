
//Declaracion de shortcuts


// localStorage.clear()
let espacio = " ";
const select  = el => document.querySelector(el);
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
const guardarSession = (clave, valor) => { sessionStorage.setItem(clave, valor) };

// Chequeo mail
const mailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


let form1 = select("#form1");

form1.addEventListener("submit", validarFormulario);

let submitBoton = select("#submit");

let registroForm = select("registroUsuario");



//data usuario

let dataUsuario = document.getElementsByClassName("dataUsuario");
let encabezadoModal = select(".encabezadoModals");
let footerModal = select(".footerModals");
//Storage
let usuarioAlmacenado = JSON.parse(localStorage.getItem("usuarioAlmacenado"));
if (usuarioAlmacenado != null){
  usuario = usuarioAlmacenado;
  if (usuario != ""){
    encabezadoModal.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">Perfil de ${usuario.nombre} ${usuario.apellido}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`
    select("#datosIngresadosUsuario").innerHTML = `<p><strong>Nombre:</strong> ${usuario.nombre}</p>
    <p><strong>Apellido:</strong> ${usuario.apellido}</p>
    <p><strong>Edad:</strong> ${usuario.edad}</p>
    <p><strong>Correo Electronico:</strong> ${usuario.mail}</p>`;
    
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
  console.log(usuario);
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

  //Storage
  guardarLocal("usuarioAlmacenado", JSON.stringify(usuario));
  

  if (usuario != ""){
    encabezadoModal.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">Perfil de ${usuario.nombre} ${usuario.apellido}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`
    select("#datosIngresadosUsuario").innerHTML = `<p><strong>Nombre:</strong> ${usuario.nombre}</p>
    <p><strong>Apellido:</strong> ${usuario.apellido}</p>
    <p><strong>Edad:</strong> ${usuario.edad}</p>
    <p><strong>Correo Electronico:</strong> ${usuario.mail}</p>`;
    
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

// Clase Comic:
class Comic {
  
  constructor (id,titulo,descripcion,precio,image) {
    this.id = id
    this.titulo = titulo;
    this.descripcion = descripcion
    this.precio = precio;
    this.image = image;
  }
}
//Comic1
let comic1 = new Comic(1,"THE BOYS ED. INTEGRAL #1","Considerado uno de los cómics más irreverentes de los últimos años, este cómic se ha convertido en todo un referente para los lectores que busquen un enfoque diferente...",35,"./assets/producto1.png");
comicsDisponibles.push(comic1);


//Comic2
let comic2 = new Comic(2,"Stranger Things #1: El Otro Lado","En este cómic, los seguidores de la serie descubrirán nuevos detalles de la historia, como lo que le pasó exactamente a Will Byers en el mundo del revés.",25,"./assets/producto2.png");
comicsDisponibles.push(comic2);


//Comic3
let comic3 = new Comic(3,"Gunnm (Battle Angel Alita) #1","Si aún no te has acercado al manga, este cómic debe ser tu primera opción.",15,"./assets/producto3.png");
comicsDisponibles.push(comic3);

//Comic4
let comic4 =new Comic(4,"Lo que más me gusta son los monstruos (Reservoir Gráfica)","Fue galardonada con el premio de Mejor Cómic Internacional del Salón Internacional del Cómic de Barcelona 2019, este se ha convertido en una obra de culto.",28,"./assets/producto4.png");
comicsDisponibles.push(comic4);
  
//Creacion cards
for (let comic of comicsDisponibles) {
  let card = document.createElement("div");
  card.setAttribute("class","card col-md-4 col-lg-3 mx-2 my-2");
  card.setAttribute("style","width: 18rem;");
  
  card.innerHTML = `
  
                <img src="${comic.image}" class="card-img-top" height="300px" width="auto" alt="THE BOYS ED. INTEGRAL 1">
  
                <div class="card-body">
  
                  <p class="card-title titulosComics" id="tituloProd1"><strong>${comic.titulo}</strong></p>
  
                  <p class="card-text" id="descriptionProd1"><strong>${comic.descripcion}</strong></p>
  
                  <div class="flowComic${comic.id}">
                  
                      <p class="card-text precioProd${comic.id} textoPrecioProd"><strong>€<span id="precioProd1">${comic.precio}</span></strong></p>
  
                    <div   id="boton">
  
                      <button type="submit" id=botonComic${comic.id} class="btn botonProducto">Comprar</button>
  
  
                    </div>
  
                    
  
                  </div>
  
                </div>`;
  
  
  select(".comicsHTML").appendChild(card);
  
  } 
  //Storage comic
  let comicsAlmacenados = JSON.parse(localStorage.getItem("comicsAlmacenados"));
  if (comicsAlmacenados != null){
    for (let comicAlmacenado of comicsAlmacenados ){
      let resumenCompra = select("#resumenCompra");
      let liComic = document.createElement("li");
      liComic.innerHTML = `<strong>${comicAlmacenado.titulo}:</strong> <strong>€${(parseInt(comicAlmacenado.precio))}</strong>`;
      resumenCompra.append(liComic);
      comicsCarrito.push(comicAlmacenado);
    }

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
    let precioTotalCompra = comicsCarrito.reduce((acc,el) => acc + el.precio,0);

  if (precioTotalCompra != 0){
     let descuento10 = calcularPorcentaje(-10);
    
        let precioConDescuento = descuento10(precioTotalCompra) ;
    
        let iva = calcularPorcentaje(21);
    
        let precioFinal = iva(precioConDescuento);
        
        console.log("Precio total:" + espacio + precioFinal);
        
        select("#descuentos").innerHTML = `<p><strong>10% off: €${formatPrice(precioTotalCompra * 0.10)}</strong></p>`;
        
        
        select("#impuestos").innerHTML = `<p><strong>IVA (21%): €${formatPrice(precioTotalCompra * 0.21)}</strong></p>`;
        
        
        select("#totalPrecio").innerHTML = `<p><strong>€${formatPrice(precioFinal)}</strong></p>`;
   }   
  }
console.log(comicsDisponibles);
console.log(comicsCarrito);
let resumenCompra = select("#resumenCompra");
//comicBoton1
let botonComic1 = select("#botonComic1");
botonComic1.onclick = () => {
  comicsCarrito.push(comic1)
  let liComic = document.createElement("li");
  liComic.innerHTML = `<strong>${comic1.titulo}:</strong> <strong>€${(parseInt(comic1.precio))}</strong>`;
  resumenCompra.append(liComic);
  guardarLocal("comicsAlmacenados",JSON.stringify(comicsCarrito));
}
//comicBoton2
let botonComic2 = select("#botonComic2");
botonComic2.onclick = () => {
  comicsCarrito.push(comic2);
  let liComic = document.createElement("li");
  liComic.innerHTML = `<strong>${comic2.titulo}:</strong> <strong>€${(parseInt(comic2.precio))}</strong>`;
  resumenCompra.append(liComic);
  guardarLocal("comicsAlmacenados",JSON.stringify(comicsCarrito));
}
//comicBoton3
let botonComic3 = select("#botonComic3");
botonComic3.onclick = () => {
  comicsCarrito.push(comic3);
  let liComic = document.createElement("li");
  liComic.innerHTML = `<strong>${comic3.titulo}:</strong> <strong>€${(parseInt(comic3.precio))}</strong>`;
  resumenCompra.append(liComic);
  guardarLocal("comicsAlmacenados",JSON.stringify(comicsCarrito));
}
//comicBoton4
let botonComic4 = select("#botonComic4");

botonComic4.onclick = () => {
  comicsCarrito.push(comic4);
  let liComic = document.createElement("li");
  liComic.innerHTML = `<strong>${comic4.titulo}:</strong> <strong>€${(parseInt(comic4.precio))}</strong>`;
  resumenCompra.append(liComic);
  guardarLocal("comicsAlmacenados",JSON.stringify(comicsCarrito));
}


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
  let precioTotalCompra = comicsCarrito.reduce((acc,el) => acc + el.precio,0);

  if (precioTotalCompra != 0){
     let descuento10 = calcularPorcentaje(-10);
    
        let precioConDescuento = descuento10(precioTotalCompra) ;
    
        let iva = calcularPorcentaje(21);
    
        let precioFinal = iva(precioConDescuento);
        
        console.log("Precio total:" + espacio + precioFinal);
        
        select("#descuentos").innerHTML = `<p><strong>10% off: €${formatPrice(precioTotalCompra * 0.10)}</strong></p>`;
        
        
        select("#impuestos").innerHTML = `<p><strong>IVA (21%): €${formatPrice(precioTotalCompra * 0.21)}</strong></p>`;
        
        
        select("#totalPrecio").innerHTML = `<p><strong>€${formatPrice(precioFinal)}</strong></p>`;
   }   
}




