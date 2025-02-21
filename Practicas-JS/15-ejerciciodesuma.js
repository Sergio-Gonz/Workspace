//realizar la suma de los primeros 5 numeros utilizando un ciclo for

let maximo = 5;
let acumulador = 0;
let numero = 1;
let acumulador2 = 0;

for (i=1;i<=maximo;i++){
    acumulador +=i;
    console.log(acumulador);

}

while(numero<=maximo){

    acumulador2 +=numero;
    console.log(acumulador2)
    numero++;
}


let numero2 = 1,acumulador3 = 0;
do{
    acumulador3+=numero2
    console.log(acumulador3)
    numero2++;
}while(numero2<=maximo);
