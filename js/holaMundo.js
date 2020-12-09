//Esto es un comentario simple

/* Esto es un comentario 
de múltiples 
líneas */

//mostrar un mensaje en la consola
console.log("¡Hola mundo!");

//mostrar un mensaje en el documento html
document.write("<h1>Este es nuestro primer mensaje</h1>");

//mostrar un mensaje por ventana
// alert("¡Hola mundo!");

//crear o declarar una variable (var - let - const)
var persona = "Pablo Domínguez";
let edad = 21;

document.write("<b>Persona:</b> " + persona);
document.write("<br><b>Edad:</b> " + edad);

//cambiar el valor de las var persona y edad
persona = "Sofía Giamarini";
edad = 29;
document.write("<br><b>Persona:</b> " + persona + " - <b>Edad:</b> " + edad);

//crear una variable constante
const URL = "http://google.com/";
document.write("<br><b>Página web:</b> " + URL);
//a continuación intentaremos cambiar el valor de URL. Al ser constante, el navegador nos marcará error
// URL = "http://trello.com/";
// document.write("<br>Página web: " + URL);