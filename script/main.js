
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

//Formulario Contacto

(function () {
  emailjs.init('taN9cOyfefYfoC2Xw');
})();
window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    this.contact_number.value = Math.random() * 100000 | 0;
    emailjs.sendForm('service_Tony', 'contact_form', this)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Formulario enviado correctamente!',
          confirmButtonColor: "#ff3e3e",
        })
      }).catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error con el servidor, intenta nuevamente mas tarde',
          confirmButtonColor: "#ff3e3e",
        })
      }
      );
  });
}
