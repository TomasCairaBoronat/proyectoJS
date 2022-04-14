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
let espacio = " "

//Clases
class Usuario{
    constructor(nombre,edad,mail) {
        this.nombre = nombre.toUpperCase();
        this.edad = edad;
        this.mail = mail.toUpperCase();
    }

    alertInfoPersonal(){
        alert("Nombre:" + this.nombre + espacio + "Edad:" + this.edad + espacio + "Dirección:" + this.direccion)
    }
}

class Comics{
    constructor(titulo,precio) {
        this.titulo = titulo.toUpperCase();
        this.precio = precio;
    }
}

//Usuarios

const usuario1 = new Usuario(prompt("Ingrese su nombre"), prompt("Ingrese su edad"), prompt("Ingrese su mail"));

const usuario2 = new Usuario(prompt("Ingrese su nombre"), prompt("Ingrese su edad"), prompt("Ingrese su mail"));

const usuario3 = new Usuario(prompt("Ingrese su nombre"), prompt("Ingrese su edad"), prompt("Ingrese su mail"));

const usuario4 = new Usuario(prompt("Ingrese su nombre"), prompt("Ingrese su edad"), prompt("Ingrese su mail"));

const usuario5 = new Usuario(prompt("Ingrese su nombre"), prompt("Ingrese su edad"), prompt("Ingrese su mail"));

const usuarios = [usuario1,usuario2,usuario3,usuario4]
usuarios.push(usuario5)

for(const usuario of usuarios){
    while (usuario.nombre == ""){
        alert("Ingrese su nombre correctamente")
       usuario.nombre = prompt("Ingrese su nombre")
    }
    while(usuario.edad == ""){
        alert("Ingrese su edad correctamente")
        usuario.edad = prompt("Ingrese su edad")
    }

    while(usuario.mail == ""){
        alert("Ingrese su mail correctamente")
        usuario.mail = prompt("Ingrese su mail")
    }
    console.log(usuario)
}



//Iteraciones
for (let i = 1; i <= 5; i++){
    
    if (i === 5){
        alert("Felicidades"+ espacio + usuario5.nombre + espacio +"eres nuestro cliente Nro 5, ¡has ganado un 10% de descuento en tu compra!")
    }
}

//Comics

const comic01 = new Comics(prompt("Ingrese el titulo del comic #1"), prompt("Ingrese el precio del comic #1"))
const comic02 = new Comics(prompt("Ingrese el titulo del comic #2"), prompt("Ingrese el precio del comic #2"))

//Arrays

const comics = []
comics.push(comic01,comic02);

for (const comic of comics) {
    console.log(comic.titulo + ":" + espacio +"$"+ comic.precio);
}

let precioNeto = (comic01.precio + comic02.precio)

let comicPrecio01int = parseInt(comic01.precio)

let comicPrecio02int = parseInt(comic02.precio)


//Funcion Precio
let netoInt = comicPrecio01int + comicPrecio02int;
if (precioNeto == ""){
    
    alert("Ingrese un monto")
    
}else if (netoInt <=0) { 
    
    alert("ingrese un numero positivo")
    
}else{
    
    let precioFinal = netoInt - (calculadora (netoInt,0.10,"*")) + (calculadora(netoInt,0.21,"*"))
    
    alert("Su total es:" + espacio + "$" + precioFinal )
    
    console.log("Precio total:" + espacio + "$" + precioFinal)
}
