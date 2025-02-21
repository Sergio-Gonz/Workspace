// Identificadores-Nombres de variables
//Reglas para nombrar variables
//1. No pueden empezar con un número
//2. No pueden tener espacios ni guiones
//3. No pueden tener caracteres especiales
// 4. No pueden ser palabras reservadas
//5. No pueden tener acentos
// 6. Deben comenzar  con una letra minúscula, mayúscula, guión bajo o signo de dólar
// los caracteres siguientes pueden ser:
// 1. Letras (A-Z o a-z)
// 2. Dígitos (0-9)
// 3. Guiones bajos (_)
// 4. Signos de dólar ($)
// ejemplo de nombres de variables válidos
var nombre = "Juan";  
let apellido = "Pérez";
// javascript es sensible a mayúsculas y minúsculas
// ejemplo
// Nombre != nombre
// javascript utiliza el camelCase para nombrar variables
// ejemplo
var nombreCompleto = "Juan Pérez";
// donde la primera letra de la primera palabra "nombre" es minúscula y 
// la primera letra de "Completo" es mayúscula
// la notacion no recomendada es el snake_case
// ejemplo
var nombre_completo = "Juan Pérez";
// donde las palabras se separan por guiones bajos
//otra notacion no recomendada es el PascalCase 
// ejemplo
var NombreCompleto = "Juan Pérez";
// como se puede observar la primera letra de cada palabra es mayúscula
// en javascript se recomienda utilizar el camelCase
// ahora para los comentarios
// los comentarios de una sola línea se realizan con //
// ejemplo de comentario de una sola línea
// los comentarios de varias líneas se realizan con /* */
// en vscode para realizar comentarios de varias líneas se selecciona el texto 
// y se presiona ctrl + /
console.log(NombreCompleto);

// ejemplos de variables válidas:camelCase
let $variable = 5;
let _variable = 10;
let variable = 15;
let variable1 = 20;
let variable_1 = 25;
let variable$ = 30;
let variable$1 = 35;

console.log($variable);
console.log(_variable);
console.log(variable);
console.log(variable1);
console.log(variable_1);
console.log(variable$);
console.log(variable$1);
