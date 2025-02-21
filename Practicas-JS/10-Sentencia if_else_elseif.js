// Sentencia de control de flujo: if else if else
// @autor: Sergio Gonzalez
// @date: 2025-02-19
// Propósito: Mostrar un mensaje si el número ingresado es mayor a 10   

let numero = 10;

//revisar si el número es mayor a 10
if (numero > 0) {
    console.log(`El número ${numero} es positivo`);
}
else if (numero < 0) {
    console.log(`El número ${numero} es negativo`);
}
else {
    console.log(`El número ${numero} es cero`);

}

//operdaor ternario
(numero > 0) ? console.log(`positivo`) : (numero < 0) ? console.log(`negativo`) : console.log(`cero`);


