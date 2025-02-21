//Dia de la semana
let dia = 4;

(dia  == 1)? console.log("Lunes") : (dia == 2)? console.log("Martes") : (dia == 3)? console.log("Miercoles") : (dia == 4)? console.log("Jueves") : (dia == 5)? console.log("Viernes") : (dia == 6)? console.log("Sabado") : (dia == 7)? console.log("Domingo") : console.log("Dia no valido");


//Dia de la semana usando switch

switch(dia){ 
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Dia no valido");
        break;
}