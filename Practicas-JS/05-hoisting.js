// para evitar problemas usamos:
'use strict';
//con esto evitamos errores en el código

//hoisting(podemos usar una variable antes de declararla)

var x ; //declaration
x= 5; //inicializando la variable

console.log(x);

// en todo caso si usamos let o const no podemos usar la variable antes de declararla   
let y = 10;
console.log(y);

// var y; //declaration    //error

// otro ejemplo seria
z = 15;

console.log(z);

let z;

// lo mas recomendable es declarar las variables antes de usarlas 
// y deben estar al inicio del código

