// let nombre = "Pablo";
// let apellido = "Domínguez";
// let userName = "pablod";
// let pass = "12345678";
// let legajo = 456;

// Crear un objeto: notación literal
let arbol = {
    altura: 100,
    unidad: "cm",
    color: "verde",
    estado: true,
    envioGratis: true,
    detalle: "puntas nevadas"
};

let arbolBlanco = {
    altura: 200,
    unidad: "cm",
    color: "blanco",
    estado: true,
    envioGratis: true,
    detalle: "-"
};

let arbolAzul = {
    altura: 150,
    unidad: "cm",
    color: "azul",
    estado: true,
    envioGratis: true,
    detalle: "-"
};

//Mostrar una propiedad del objeto
document.write("Árbol de Navidad color: " + arbol.color);
document.write("<br>Árbol de Navidad altura: " + arbol.altura + " " + arbol.unidad);
// otra forma de escribir la línea anterior:
document.write(`<br>Altura: ${arbol["altura"]} ${arbol["unidad"]}`);

// Modificar una propiedad de un objeto
arbol.altura = 120;
document.write("<br>Árbol de Navidad color: " + arbol.color);
document.write("<br>Árbol de Navidad altura: " + arbol.altura + " " + arbol.unidad);
mostrarDatosArbol();

// Mostrar TODAS las propiedades de un objeto
// let llaves = Object.keys(arbol);
// console.log(llaves);

// for (let i = 0; i < llaves.length; i++) {
//     let clave = llaves[i];
//     document.write(`<br>${clave}: ${arbol[clave]}`);
// }

// Agregar una nueva propiedad
arbol.pelotitas = 16;
mostrarDatosArbol();

function mostrarDatosArbol() {
    let llaves = Object.keys(arbol);
    console.log(llaves);

    for (let i = 0; i < llaves.length; i++) {
        let clave = llaves[i];
        document.write(`<br>${clave}: ${arbol[clave]}`);
    }
}