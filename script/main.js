//Calculadora
function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {

        case "+":

            return primerNumero + segundoNumero;

        case "-":

            return primerNumero - segundoNumero;

        case "*":

            return primerNumero * segundoNumero;

        case "/":

            return primerNumero / segundoNumero;

        default:

            return 0;

    }
}

//Declaracion de shortcuts

let espacio = " ";


//Usuarios

// Chequeo mail
const mailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// Array de datos a ingresar:
const datos = ['nombre', 'edad', 'mail']
// Array donde ir guardando los usuarios:
const usuarios = [];

// Indice del array de usuarios:
let index = 0;

// Class Usuario:
class Usuario {
  constructor (nombre, edad, mail) {
    this.nombre = nombre;
    this.edad = edad;
    this.mail = mail;
  }
  mostrarDataUsuario() {

    alert(
      'Nombre: ' + this.nombre + '\n' + 
      'Edad: ' + this.edad + '\n' + 
      'Mail: ' + this.mail
    )

  }
  convertirUsuario(){

    this.nombre = this.nombre.toUpperCase();

    this.mail = this.mail.toLowerCase()

  }
}
// Metodos de validacion de datos ingresados.
const validacionUsuarios = {

  nombre: (input) => input.length < 3,

  edad: (input) => isNaN(input) || input > 100 || input == "" ,

  mail: (input) => !input.match(mailRegEx)
}

// Funcion para ingresar datos de usuario:
function ingresarDataUsuario(dato) {

  let input;
  
  do {
    input = prompt("Ingrese su " + dato)

  } while (validacionUsuarios[dato](input));
  
  return input;

}

// Funcion para crear un nuevo usuario:
function crearUsuario() {

  usuarios[index] = new Usuario();

  datos.forEach((dato) =>{
    usuarios[index][dato] = ingresarDataUsuario(dato)
  })
  usuarios[index].convertirUsuario();

  usuarios[index].mostrarDataUsuario();
  
  index++
}

do { 

  crearUsuario();

} while (index <= 4){

    alert("Felicidades"+ espacio + usuarios[4].nombre + espacio 
    +"eres nuestro cliente Nro 5, ¡has ganado un 10% de descuento en tu compra!");
}

console.log(usuarios);

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

  comics[indexComic].mostrarDataComic();
  indexComic++
}

do { 
  crearComic()

} while (indexComic <= 1);

const resumenCompra = comics.filter((el) => el.precio > 0)



resumenCompra.forEach((el) =>{
  console.log('Titulo: ' + el.titulo + '\n' + 
'Precio: ' + "$"+ el.precio)
  
})

let precioNeto = (comics[0].precio + comics[1].precio);

let precioTotalCompra = resumenCompra.reduce((acc,el) => acc + parseInt(el.precio),0)


//Funcion Precio

if (precioNeto == ""){
    
    alert("Ingrese un monto");
    
}else if (precioTotalCompra <=0) { 
    
    alert("ingrese un numero positivo");
    
}else{
    let descuento10 = (calculadora (precioTotalCompra,0.10,"*"));

    let precioConDescuento = precioTotalCompra - descuento10 ;

    let iva = (calculadora(precioConDescuento,0.21,"*"));

    let precioFinal = precioConDescuento + iva;

    alert("Productos: "+"\n" + comics[0].titulo + ": " + "$"+ parseInt(comics[0].precio) +"\n" + 
    comics[1].titulo + ": " + "$"+ parseInt(comics[1].precio)+"\n" +"Descuentos e impuestos:" +"\n"+ "10% Off: "+"$"+ descuento10 +"\n"
    +"IVA: " +"$" + iva +"\n" +"Total:"+"\n" + espacio + "$" + precioFinal );
    
    console.log("Precio total:" + espacio + "$" + precioFinal);
}
