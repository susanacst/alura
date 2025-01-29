//Variables
let numeroSecreto = 2;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

console.log(numeroUsuario);
/*
Este código realiza
la comparación
*/
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else {
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
}

//DESAFIO 
// Muestra una alerta de bienvenida
alert("¡Bienvenida y bienvenido a nuestro sitio web!");

// Declara variables con valores iniciales
let nombre = "Lua";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;

// Muestra una alerta de error
alert("¡Error! Completa todos los campos");

// Declara una variable para el mensaje de error y la muestra en una alerta
let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);

// Pregunta el nombre del usuario y almacena la respuesta en la variable nombre
nombre = prompt("¿Cuál es tu nombre?");

// Pregunta la edad del usuario y almacena la respuesta en la variable edad
edad = prompt("¿Cuál es tu edad?");

// Convierte la edad a número y verifica si es mayor o igual a 18
if (parseInt(edad) >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!");
}





