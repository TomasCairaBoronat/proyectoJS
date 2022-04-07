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

let espacio = " "

for (let i = 1; i <= 10; i++){
    console.log("Eres el usuario Nro :" + espacio + i)
    if (i === 10){
        alert("Eres nuestro cliente Nro 10, felicidades has ganado un 10% de descuento en tu compra!")
        break
    }
}

let precioProducto = prompt("Ingrese el valor total de su prducto o productos (IVA del 21% se aplica despues junto con su 10% de descuento!)")
let precioInt = parseInt(precioProducto)
if (precioProducto == ""){
    alert("Ingrese un monto")
}else if (precioInt <=0) { 
    alert("ingrese un numero positivo")
}else{
    let precioFinal = precioInt + (calculadora (precioInt,0.21,"*")) - (calculadora(precioInt,0.10,"*"))
    alert("Su total es :" + espacio + "$" + precioFinal )
    console.log("Este es el precio final :" + espacio + precioFinal)
}