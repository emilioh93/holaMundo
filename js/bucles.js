//While
/*
while(condición lógica){
    ejecutar tal código
    cambié la condición
}
*/

let contador = 1;

while (contador <= 15) {
    document.write("<br>Elemento " + contador);
    contador++; //La otra opción es: contador = contador + 1; o contador += 1
}


//Do while
//Hacer...mientras se cumple la condición lógica
let cont = 16;

do {
    document.write("<br>Vacaciones faltan " + cont + " días");
    cont--;
} while (cont >= 1)