// ciclo while en javascript

let i = 0, repeticiones = 10;


while (i <= repeticiones) {
    console.log(i);
    i++;
}

// Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// ciclo do while en javascript

let j = 0, repeat = 10;

do {  
    console.log(j++);
    // j++;
} while (j <= repeat);

// Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// ciclo for en javascript

let rep = 10;
for (let k = 0; k <= rep; k++) {
    console.log(k);
}

// Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

/*Para saber cual ciclo es mejor, 
se puede decir que el ciclo for es mejor cuando se conoce el número de repeticiones,
el ciclo while es mejor cuando no se conoce el número de repeticiones y 
el ciclo do while es mejor cuando se necesita que el código
se ejecute al menos una vez.
 */

