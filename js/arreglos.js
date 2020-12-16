// Crear arreglo con datos
let series = ["The Mandalorian", "GOT", "Breaking Bad", 50, true];

// Crear un arreglo vacío
let temporadas = [];

// Mostrar un elemento del arreglo
document.write(series[1]);

// Mostrar todos los elementos del arreglo: length
document.write("<h4>Mostrar todos los elementos de un arreglo</h4>")
console.log(series.length);
for (let i = 0; i < series.length; i++) {
    document.write(series[i] + " - ");
}

// Agregar un elemento al final del arreglo
series.push("Peaky Blinders");
document.write("<h4>Agregar un elemento al final del arreglo</h4>")
console.log(series.length);
for (let i = 0; i < series.length; i++) {
    document.write(series[i] + " - ");
}

// Agregar elemento a una posición particular del arreglo
series.splice(1, 0, "Gambito de Dama");
document.write("<h4>Agregar un elemento a una posición particular del arreglo</h4>")
console.log(series.length);
for (let i = 0; i < series.length; i++) {
    document.write(series[i] + " - ");
}

// Eliminar elementos desde una posición de un arreglo
series.splice(4, 2);
document.write("<h4>Eliminar elementos desde una posición particular del arreglo</h4>")
console.log(series.length);
for (let i = 0; i < series.length; i++) {
    document.write(series[i] + " - ");
}

// Modificar elemento de mi arreglo
series[0] = "Dark";
document.write("<h4>Modificar elemento de mi arreglo</h4>")
console.log(series.length);
for (let i = 0; i < series.length; i++) {
    document.write(series[i] + " - ");
}