// crear una clase
class Persona {
    // Métodos. El primero que se ejecuta es el Constructor
    constructor(nombreP, apellidoP, mailP, anioP, usuarioP, passP) {
        this.nombre = nombreP;
        this.apellido = apellidoP;
        this.mail = mailP;
        this.anio = anioP;
        this.usuario = usuarioP;
        this.pass = passP;
        this.estado = true; //propiedad por defecto
    }

    // Métodos
    mostrarDatos() {
        document.write(`<h4>Persona</h4>
        Nombre: ${this.nombre}
        <br>Apellido: ${this.apellido}
        <br>Mail: ${this.mail}
        <br>Año de alta: ${this.anio}
        <br>Nombre de usuario: ${this.usuario}
        <br>Estado: ${this.estado}`);
    }

    login(userP, passP) {
        alert(`El usuario ${userP} ingresó al sistema.`);
    }

    // Propiedades conmutadas set & get
    // get sirve para mostrar una propiedad
    get mostrarApellido() {
        return this.apellido;
    }
    get mostrarMail() {
        return this.mail;
    }

    // set sirve para modificar una propiedad
    set modificarApellido(nuevoApellido) {
        this.apellido = nuevoApellido;
    }
    set modificarMail(nuevoMail) {
        this.mail = nuevoMail;
    }
}

// Herencia
class Alumno extends Persona {
    constructor(nombreP, apellidoP, mailP, anioP, usuarioP, passP, legajoP, estadoCursadoP, cursoP) {
            super(nombreP, apellidoP, mailP, anioP, usuarioP, passP);
            this.legajo = legajoP;
            this.curso = cursoP;
            this.estadoCursado = estadoCursadoP;
        }
        // Métodos
    mostrarDatos() {
        document.write(`<h4>Persona</h4>
        Nombre: ${this.nombre}
        <br>Apellido: ${this.apellido}
        <br>Mail: ${this.mail}
        <br>Año de alta: ${this.anio}
        <br>Nombre de usuario: ${this.usuario}
        <br>Estado: ${this.estado}
        <br>Legajo: ${this.legajo}
        <br>Curso: ${this.curso}`);
    }
}

// Crear objetos
let pablo = new Persona("Pablo", "Domínguez", "pablodominguez@gmail.com", 2019, "pablodominguez", "12345678");
let vero = new Persona("Verónica", "Auad", "veroauad@gmail.com", 2020, "veroauad", "12345678");

pablo.mostrarDatos();
pablo.login("pablodominguez", "12345678");
vero.mostrarDatos();

// Utilizar las propiedades conmutadas
document.write("<br>" + vero.mostrarMail);
vero.modificarMail = "veronica@mail.com";
document.write("<br>" + vero.mostrarMail);

// Crear objeto Alumno
let esteban = new Alumno("Esteban", "Velardez", "esteban.velardez@gmail.com", 2020, "evelardez", "123", 1546, "En proceso", "FullStack");
esteban.mostrarDatos();