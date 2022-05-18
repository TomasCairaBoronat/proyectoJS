
//Declaracion de shortcuts

// localStorage.clear()
const select = el => document.querySelector(el);
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
const guardarSession = (clave, valor) => { sessionStorage.setItem(clave, valor) };
const obtenerLocal = (valor) => JSON.parse(localStorage.getItem(valor))
const getComicsFromCart = () => JSON.parse(localStorage.getItem("comicsAlmacenados")) || [];
const findComics = () => comicsAlmacenados.find(comicCarrito => comicCarrito.id == comic.id);
function mostrarToast(texto) {
  Toastify({
    gravity: "top", position: "center", text: texto, style: { color: 'black', background: "linear-gradient(to right, #ff3e3e, #fe3d3d)", }, duration: 3000
  }).showToast();
}
function guardarComicsEnStorage(comics) {
  localStorage.setItem("comicsAlmacenados", JSON.stringify(comics));
}
