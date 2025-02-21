// Operadores en javascript
/*
    01-Operadores aritméticos
    02-Operadores de asignación
    03-Operadores de comparación
    04-Operadores lógicos
    05-Operadores de tipo
    06-Operadores de cadena
    07-Operadores condicionales
    08-Operadores de coma
*/

// 01-Operadores aritméticos
// Suma
let a = 0;
let b = 2;
let suma = a + b;
console.log(suma); // 7

// Resta
let resta = a - b;
console.log(resta); // 3

// Multiplicación
let multiplicacion = a * b;
console.log(multiplicacion); // 10

// División
let division = a / b;
console.log(division); // 2.5

// Módulo
let modulo = a % b;
console.log(modulo); // 1

// Exponenciación
let exponenciacion = a ** b;
console.log(exponenciacion); // 25

//pre-incremento
let preIncremento = ++a;
console.log(preIncremento); // 6

//post-incremento
let postIncremento = a++;
console.log(a); // 6

//pre-decremento
--a;
console.log(a); // 6

//post-decremento   
a--;
console.log(a); // 5

//ejemplo
let x = 5;
let y = 2;
let z = ++x * y--;

console.log(z); // 12
console.log(x); // 6
console.log(y); // 1


// 02-Operadores de asignación
let c = 2;
let d = 3;
let e = 4;
let f = 5;

// Asignación
c = d;
console.log(c); // 3

// Asignación de suma
e += f;
console.log(e); // 9

// Asignación de resta
e -= f;
console.log(e); // 4

//operadores de comparación
let g = 2;
let h = '2';
console.log(g)
console.log(h)

//string interpolation
console.log(`g es igual a ${g}`);



//operador de igualdad (solo compara valor y hace conversión si es necesario)
console.log(g == h); // true
// string interpolation
console.log(`${g}==${h}->${g==h}`);

//operador de igualdad estricta (compara valor y tipo de dato)
console.log(g === h); // false
console.log(`${g}===${h}->${g===h}`)


//operador de desigualdad (solo compara valor y hace conversión si es necesario)
console.log(`${g} !={h}->${g!=h}`); // false

console.log(`${g} !== ${h} ->${g!==h}`); // false

//operador de desigualdad estricta (compara valor y tipo de dato)
console.log(g !== h); // true

//operador mayor que (para el operador mayor que, si el valor es un string,
// se convierte a número)
console.log(g > h); // false


//operadores lógicos
let i = 2;
let j = 3;
let k = 4;
let l = 5;

//operador AND (&&) (si ambos son verdaderos, entonces es verdadero)
// si uno de los dos es falso, entonces es falso, la tabla de verdad es:
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false
console.log(`${i} < ${j} && ${j} < ${k} -> ${i < j && j < k}`); // true
console.log(`${i} < ${j} && ${j} > ${k} -> ${i < j && j > k}`); // false

//operador OR (||) (si uno de los dos es verdadero, entonces es verdadero)
// si ambos son falsos, entonces es falso, la tabla de verdad es:
// true || true -> true
// true || false -> true
// false || true -> true
// false || false -> false
console.log(`${i} < ${j} || ${j} < ${k} -> ${i < j || j < k}`); // true
console.log(`${i} > ${j} || ${j} > ${k} -> ${i > j || j > k}`); // false

//operador NOT (!) (si es verdadero, entonces es falso y viceversa)
console.log(`!(${i} < ${j}) -> ${!(i < j)}`); // false
console.log(`!(${i} > ${j}) -> ${!(i > j)}`); // true

//ejercicio de operadores lógicos (Valor dentro de un rango)
//declaración de variables
let rango1 = 18, rango2 = 25;

//valor para saber si está dentro del rango
let edad = 20;

//contenedor del resultado
let resultado = edad >= rango1 && edad <= rango2;
console.log(`valor dentro del rango: ${resultado}`);
