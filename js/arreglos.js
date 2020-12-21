// Crear arreglo con datos
let series = ["The Mandalorian", "GOT", "Breaking Bad", 50, true];

// Crear un arreglo vacío
let temporadas = [];

// Mostrar un elemento del arreglo
document.write(series[1]);

// Mostrar todos los elementos del arreglo: length
mostrarSeries("Mostrar todos los elementos de un arreglo");

// Agregar un elemento al final del arreglo
series.push("Peaky Blinders");
mostrarSeries("Agregar un elemento al final del arreglo");

// Agregar elemento a una posición particular del arreglo
series.splice(1, 0, "Gambito de Dama");
mostrarSeries("Agregar un elemento a una posición particular del arreglo");

// Eliminar elementos desde una posición de un arreglo
series.splice(4, 2);
mostrarSeries("Eliminar elementos desde una posición particular del arreglo");

// Modificar elemento de mi arreglo
series[0] = "Dark";
mostrarSeries("Modificar elemento de mi arreglo");

function mostrarSeries(titulo) {
    document.write("<h4>" + titulo + "</h4>");
    console.log(series.length);
    for (let i = 0; i < series.length; i++) {
        document.write(series[i] + " - ");
    }
}