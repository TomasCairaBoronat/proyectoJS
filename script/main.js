
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
    <p><strong>Edad:</strong> ${usuario.edad}</p>
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
//Comics
const comicsDisponibles = []
const comicsCarrito = []
const botonFlexFlow = []
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
let comic1 = new Comic(1,"THE BOYS ED. INTEGRAL 1","Considerado uno de los cómics más irreverentes de los últimos años, este cómic se ha convertido en todo un referente para los lectores que busquen un enfoque diferente...",35,"./assets/producto1.png");
comicsDisponibles.push(comic1);


//Comic2
let comic2 = new Comic(2,"Stranger Things 1. El Otro Lado","En este cómic, los seguidores de la serie descubrirán nuevos detalles de la historia, como lo que le pasó exactamente a Will Byers en el mundo del revés.",25,"./assets/producto2.png");
comicsDisponibles.push(comic2);


//Comic3
let comic3 = new Comic(3,"Gunnm (Battle Angel Alita) 1","Si aún no te has acercado al manga, este cómic debe ser tu primera opción.",15,"./assets/producto3.png");
comicsDisponibles.push(comic3);

//Comic4
let comic4 =new Comic(4,"Lo que más me gusta son los monstruos (Reservoir Gráfica)","Fue galardonada con el premio de Mejor Cómic Internacional del Salón Internacional del Cómic de Barcelona 2019, este se ha convertido en una obra de culto.",28,"./assets/producto4.png");
comicsDisponibles.push(comic4);
  
for (let comics of comicsDisponibles) {
  let card = document.createElement("div");
  card.setAttribute("class","card col-md-4 col-lg-3 mx-2 my-2")
  card.setAttribute("style","width: 18rem;")
  
  card.innerHTML = `
  
                <img src="${comics.image}" class="card-img-top" height="300px" width="auto" alt="THE BOYS ED. INTEGRAL 1">
  
                <div class="card-body">
  
                  <p class="card-title titulosComics" id="tituloProd1"><strong>${comics.titulo}</strong></p>
  
                  <p class="card-text" id="descriptionProd1"><strong>${comics.descripcion}</strong></p>
  
                  <div class="flowComic${comics.id}">
                  
                      <p class="card-text precioProd${comics.id} textoPrecioProd"><strong>€<span id="precioProd1">${comics.precio}</span></strong></p>
  
                    <div   id="boton">
  
                      <button type="submit" id=botonComic${comics.id} class="btn botonProducto">Comprar</button>
  
  
                    </div>
  
                    
  
                  </div>
  
                </div>`;
  
  
  select(".comicsHTML").appendChild(card);
  
  } 
console.log(comicsDisponibles);
console.log(comicsCarrito);
let resumenCompra = select("#resumenCompra")
//comicBoton1
let botonComic1 = select("#botonComic1")
botonComic1.onclick = () => {
  comicsCarrito.push(comic1.precio)
  let liComic1 = document.createElement("li");
  liComic1.innerHTML = `<strong>${comic1.titulo}:</strong> <strong>€${(parseInt(comic1.precio))}</strong>`
  resumenCompra.append(liComic1)
}
//comicBoton2
let botonComic2 = select("#botonComic2")
botonComic2.onclick = () => {
  comicsCarrito.push(comic2.precio)
  let liComic2 = document.createElement("li");
  liComic2.innerHTML = `<strong>${comic2.titulo}:</strong> <strong>€${(parseInt(comic2.precio))}</strong>`
  resumenCompra.append(liComic2)
}
//comicBoton3
let botonComic3 = select("#botonComic3")
botonComic3.onclick = () => {
  comicsCarrito.push(comic3.precio)
  let liComic3 = document.createElement("li");
  liComic3.innerHTML = `<strong>${comic3.titulo}:</strong> <strong>€${(parseInt(comic3.precio))}</strong>`
  resumenCompra.append(liComic3)
}
//comicBoton4
let botonComic4 = select("#botonComic4")

botonComic4.onclick = () => {
  comicsCarrito.push(comic4.precio)
  let liComic4 = document.createElement("li");
  liComic4.innerHTML = `<strong>${comic4.titulo}:</strong> <strong>€${(parseInt(comic4.precio))}</strong>`
  resumenCompra.append(liComic4)
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
  let precioTotalCompra = comicsCarrito.reduce((acc,el) => acc + el,0)

  if (precioTotalCompra != 0){
     let descuento10 = calcularPorcentaje(-10);
    
        let precioConDescuento = descuento10(precioTotalCompra) ;
    
        let iva = calcularPorcentaje(21);
    
        let precioFinal = iva(precioConDescuento);
        
        console.log("Precio total:" + espacio + precioFinal);
        
        select("#descuentos").innerHTML = `<p><strong>10% off: €${formatPrice(precioTotalCompra * 0.10)}</strong></p>`;
        
        
        select("#impuestos").innerHTML = `<p><strong>IVA (21%): €${formatPrice(precioTotalCompra * 0.21)}</strong></p>`;
        
        
        select("#totalPrecio").innerHTML = `<p><strong>€${formatPrice(precioFinal)}</strong></p>`
   }   
}




