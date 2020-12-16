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