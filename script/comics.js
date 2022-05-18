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
    card.setAttribute("class", "card col-md-4 col-lg-3 mx-2 my-2");
    card.setAttribute("style", "width: 18rem;");

    //Desestructuracion de comics
    const { id, titulo, descripcion, precio, image } = comic

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

      const comicEnCarrito = comicsAlmacenados.find(comicCarrito => comicCarrito.id == comic.id);

      if (comicEnCarrito) {
        if (comicEnCarrito.cantidad < 10) {
          comicEnCarrito.cantidad++;
          botonComic.innerHTML = `Added X${comicEnCarrito.cantidad}`

          setTimeout(() => {
            botonComic.innerHTML = `Add to cart`
          }, 1000)
          mostrarToast(`Agregado a carrito: ${titulo} x${comicEnCarrito.cantidad}!`)
        } else {
          botonComic.innerHTML = `Maxed out`

          setTimeout(() => {
            botonComic.innerHTML = `Add to cart`
          }, 1000)

          mostrarToast(`Ha llegado al limite maximo de 10 unidades`)
        }


      } else {
        comic.cantidad = 1;
        comicsAlmacenados.push(comic);

        botonComic.innerHTML = `Added X 1`

        setTimeout(() => {
          botonComic.innerHTML = `Add to cart`
        }, 1000)

        mostrarToast(`Agregado a carrito: ${titulo} x1!`)
      }

      guardarLocal("comicsAlmacenados", JSON.stringify(comicsAlmacenados));
    }


  }
}
pedirComics()