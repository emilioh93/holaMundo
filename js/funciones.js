// Función sin parámetros
function hola() {
    document.write("¡Hola Mundo!");
}

// Función con parámetros
function saludar(nombre, apellido) {
    document.write("<br>Hola mi nombre es " + nombre + ", y mi apellido es " + apellido);
}

// Funciones que retornan un valor
function convertirPesosDolar(pesos) {
    let montoFinal = pesos / 88;
    return montoFinal.toFixed(2); //la función toFixed nos permite recortar los decimales
}

// Llamar o invocar una función
hola();
saludar("Emilio", "Hurtado");
saludar("Pablo", "Helguera");

let precioPS5 = convertirPesosDolar(100000);

document.write(`<br>Producto PS 5: USD ${precioPS5}`);
document.write(`<br>Producto PC: USD ${convertirPesosDolar(130000)}`);