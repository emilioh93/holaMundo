//parseInt("40"): esto me devuelve un número 40 int
let numero1 = parseInt(prompt("Ingrese un 1er número:"));
let numero2 = parseInt(prompt("Ingrese un 2do número:"));

document.write("<br>Número 1: " + numero1);
document.write("<br>Número 2: " + numero2);
document.write("<br>Resultado: " + (numero1 + numero2));

/* Estructura if:
if(condición lógica){
    código que quiero mostrar si la condición se cumple
} else {
    código que quiero mostrar si la condición NO se cumple
}
*/

if (numero1 > numero2) {
    document.write("<br>El número 1: " + numero1 + ", es <b>mayor</b> que el número 2: " + numero2);
} else if (numero1 == numero2) {
    document.write("<br>Los números son iguales. Números: " + numero1);
} else {
    document.write("<br>El número 1: " + numero1 + ", es <b>menor</b> que el número 2: " + numero2);
}