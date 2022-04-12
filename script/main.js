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

//Objeto1
const usuario1 = new Usuario(prompt("Ingrese su nombre"), prompt("Ingrese su edad"), prompt("Ingrese su mail"));
console.log(usuario1)

//Iteraciones
for (let i = 1; i <= 10; i++){
    
    if (i === 10){
        alert("Felicidades"+ espacio + usuario1.nombre + espacio +"eres nuestro cliente Nro 10, ¡has ganado un 10% de descuento en tu compra!")
        break
    }
}

//Comics

const comic01 = new Comics(prompt("Ingrese el titulo del comic"), prompt("Ingrese el precio del comic"))
const comic02 = new Comics(prompt("Ingrese el titulo del comic"), prompt("Ingrese el precio del comic"))

//Arrays
const comics = []
comics.push(comic01);
comics.push(comic02);

console.log(comics);

let precioNeto = comic01.precio + comic02.precio;
//Funcion Precio
let netoInt = parseInt(precioNeto)
if (precioNeto == ""){
    
    alert("Ingrese un monto")

}else if (netoInt <=0) { 

    alert("ingrese un numero positivo")

}else{

    let precioFinal = netoInt - (calculadora (netoInt,0.10,"*")) + (calculadora(netoInt,0.21,"*"))

    alert("Su total es :" + espacio + "$" + precioFinal )

    console.log("Este es el precio final :" + espacio + "$" + precioFinal)
}