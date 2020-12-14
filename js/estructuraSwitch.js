let estacion = prompt("¿Cuál es su estación del año preferida?: 1-Verano; 2-Otoño; 3-Invierno; 4-Primavera");

// El triple = se usa cuando queremos ver si algo es idéntico. Doble para saber si es el mismo valor.
// if (estacion === "1") {
//     document.write("Usuario seleccionó Verano");
// } else if (estacion === "2") {
//     document.write("Usuario seleccionó Otoño");
// } else if (estacion === "3") {
//     document.write("Usuario seleccionó Invierno");
// } else if (estacion === "4") {
//     document.write("Usuario seleccionó Primavera");
// } else {
//     document.write("Eligió una opción incorrecta");
// }

//Para no usar muchos if's anidados, existe la estructura switch
//En las líneas 19 al 22 agrupé el case para que con distintas opciones, de el mismo resultado
switch (estacion) {
    case "1":
    case "Verano":
    case "verano":
    case "VERANO":
        document.write("Usuario seleccionó Verano");
        break;
    case "2":
        document.write("Usuario seleccionó Otoño");
        break;
    case "3":
        document.write("Usuario seleccionó Invierno");
        break;
    case "4":
        document.write("Usuario seleccionó Primavera");
        break;
    default:
        document.write("Opción incorrecta");
}