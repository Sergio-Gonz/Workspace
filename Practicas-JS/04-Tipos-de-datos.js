// Tipos de datos en javascript
// 1. Number (enteros, decimales, infinito, NaN): 1, 1.5, 1/0, 0/0
// 2. String: "hola", 'hola', `hola`
// 3. Boolean: true, false -> 1, 0->almacena un valor lógico
// 4. Undefined: undefined ->ausencia de valor o tipos primitivos
// 5. Null: null ->ausecia de la referencia a un objeto
// 6. Object: { key: value }, [1, 2, 3] 
// 7. Symbol: Symbol('a') (nuevo en ES6) 
// 8. BigInt: 1n (nuevo en ES10) 


// ejemplos de tipos de datos en javascript

let miEntero = 17;
console.log(miEntero);
console.log(typeof miEntero);


miEntero = "Sergio";
console.log(miEntero);
console.log(typeof miEntero);

let miFlotante = 3.1416;
console.log(miFlotante);

let miCadena = "Hola mundo";
console.log(miCadena);

let miBooleano = true;
console.log(miBooleano);

let miNull = null;
console.log(miNull);
console.log(typeof miNull);


let miUndefined = undefined;
console.log(miUndefined);
console.log(typeof miUndefined);

let miObjeto = { nombre: "Juan", edad: 30 };
console.log(miObjeto);
console.log(typeof miObjeto);
