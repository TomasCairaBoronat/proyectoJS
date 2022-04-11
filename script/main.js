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
    constructor(nombre,edad,direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }
    consoleInfoPersonal(){
        console.log("Nombre:" + this.nombre + espacio + "Edad:" + this.edad + espacio + "Dirección:" + this.direccion);
    }
    alertInfoPersonal(){
        alert("Nombre:" + this.nombre + espacio + "Edad:" + this.edad + espacio + "Dirección:" + this.direccion)
    }
}

//Objeto1
const usuario1 = new Usuario(prompt("Ingrese su nombre"), prompt("Ingrese su edad"), prompt("Ingrese su dirección"));
usuario1.consoleInfoPersonal();

//Iteraciones
for (let i = 1; i <= 10; i++){
    
    if (i === 10){
        alert("Felicidades"+ espacio + usuario1.nombre + espacio +"eres nuestro cliente Nro 10, ¡has ganado un 10% de descuento en tu compra!")
        break
    }
}

//Funcion Precio
let precioProducto = prompt("Ingrese el valor total de su prducto o productos (¡IVA del 21% se aplica despues junto con su 10% de descuento!)")

let precioInt = parseInt(precioProducto)

if (precioProducto == ""){

    alert("Ingrese un monto")

}else if (precioInt <=0) { 

    alert("ingrese un numero positivo")

}else{

    let precioFinal = precioInt - (calculadora (precioInt,0.10,"*")) + (calculadora(precioInt,0.21,"*"))

    alert("Su total es :" + espacio + "$" + precioFinal )

    console.log("Este es el precio final :" + espacio + "$" + precioFinal)
}