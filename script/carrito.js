//Carrito

let carrito = select("#Carrito");

carrito.onclick = () => {
  comicsAlmacenados = getComicsFromCart()

  //Body carrito

  if (comicsAlmacenados != "") {
    select(".carritoBody").innerHTML = `<section class="container" >
    <h5 style="text-align: left;"><strong>Productos:</strong></h2>
    <ul id="resumenCompra"></ul>
    <h5><strong>Descuentos:</strong></h5>
    <div id="descuentos"></div>
    <h5><strong>Impuestos:</strong></h5>
    <div id="impuestos"></div>
    <h5><strong>Total: <span id="totalPrecio"></span></strong></h5>
    </section>`
  } else {
    select(".carritoBody").innerHTML = `<h5 class="sinProducto"><strong>No hay productos en el carrito</strong></h5>`
  }

  //resumen de productos agregados en carrito

  let resumenCompra = select("#resumenCompra");

  resumenCompra.innerHTML = '';

  for (let comicAlmacenado of comicsAlmacenados) {
    const { titulo, precio, cantidad, id } = comicAlmacenado;

    let liComic = document.createElement("li");
    liComic.innerHTML = `
    
    <p class="mb-0"><strong>${titulo}: ${precio}€</strong></p> 
    
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

//Increment Value
function increment(id) {
  comicsAlmacenados = getComicsFromCart();
  const comic = comicsAlmacenados.find(comic => comic.id === id);
  if (comic.cantidad < 10) comic.cantidad++;
  guardarComicsEnStorage(comicsAlmacenados);
  select(`#cantidad${id}`).innerText = comic.cantidad;
}

//Decrement Value
function decrement(id) {
  comicsAlmacenados = getComicsFromCart();
  const comic = comicsAlmacenados.find(comic => comic.id === id);
  if (comic.cantidad > 0) comic.cantidad--;
  guardarComicsEnStorage(comicsAlmacenados);
  select(`#cantidad${id}`).innerText = comic.cantidad;
}

//resumen
const options = {
  style: 'currency',
  currency: 'EUR'
}
const formatPrice = price => price.toLocaleString('es-ES',options);

function calcularPorcentaje(porcentaje) {
  return function (precio) {
    let calculoPorcentaje = (precio * porcentaje) / 100;
    return precio += calculoPorcentaje;
  }
}
// //Funcion Precio
let botonResumen = select("#resumen");
botonResumen.onclick = () => {
  comicsAlmacenados = getComicsFromCart();
  let precioTotalCompra = comicsAlmacenados.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);

  if (precioTotalCompra != 0) {
    let descuento10 = calcularPorcentaje(-10);

    let precioConDescuento = descuento10(precioTotalCompra);

    let iva = calcularPorcentaje(21);

    let precioFinal = iva(precioConDescuento);

    select("#descuentos").innerHTML = `<p><strong>10% off: ${formatPrice(precioTotalCompra * 0.10)}</strong></p>`;


    select("#impuestos").innerHTML = `<p><strong>IVA (21%): ${formatPrice(precioTotalCompra * 0.21)}</strong></p>`;


    select("#totalPrecio").innerHTML = `${formatPrice(precioFinal)}`;
  } else {
    select("#descuentos").innerHTML = `<p><strong>10% off: 0€</strong></p>`;


    select("#impuestos").innerHTML = `<p><strong>IVA (21%): 0€</strong></p>`;


    select("#totalPrecio").innerHTML = `<strong>0€</strong>`;
  }
}