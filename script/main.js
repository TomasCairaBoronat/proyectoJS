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

for (let i = 1; i <= 10; i++){
    console.log("Eres el usuario Nro :" + " " + i)
    if (i === 10){
        alert("Eres nuestro cliente Nro 10, felicidades has ganado un 10% de descuento en tu compra!")
        break
    }
}

let precioProducto = Number(prompt("Ingrese el valor total de su prducto o productos (IVA del 21% se aplica despues junto con su 10% de descuento!)"))
console.log(precioProducto)
if (precioProducto == 0){
    alert("Ingrese un monto")
}else if (precioProducto <=0) { 
    alert("ingrese un numero positivo")
}else{
    alert("Su total es:" + " " + "$" + ((precioProducto + (calculadora (precioProducto,0.21,"*"))) - (calculadora(precioProducto,0.10,"*")) ) )
    console.log("Su monto total es:"+ " "+ ((precioProducto + (calculadora (precioProducto,0.21,"*"))) - (calculadora(precioProducto,0.10,"*")) ))
}