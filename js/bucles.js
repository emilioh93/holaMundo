//While
/*
while(condición lógica){
    ejecutar tal código
    cambié la condición
}
*/
document.write("<br>Bucle While:");

let contador = 1;

while (contador <= 15) {
    document.write("<br>Elemento " + contador);
    contador++; //La otra opción es: contador = contador + 1; o contador += 1
}


//Do while
//Hacer...mientras se cumple la condición lógica
document.write("<br>Bucle Do-While:");

let cont = 16;

do {
    document.write("<br>Vacaciones faltan " + cont + " días");
    cont--;
} while (cont >= 1)


//For
/*
for(crear una variable ; condición lógica ; incrementar o decremento variable){...}
*/
document.write("<br>Bucle For:");

for (let i = 11; i >= 1; i--) {
    document.write("<br>Días que faltan para Navidad: " + i);
}