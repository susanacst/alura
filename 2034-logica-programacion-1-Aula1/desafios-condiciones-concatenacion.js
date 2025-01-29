// Pregunta al usuario qué día de la semana es
let diaSemana = prompt("¿Qué día de la semana es?");
if (diaSemana === "Sábado" || diaSemana === "Domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}

// Verifica si un número ingresado por el usuario es positivo o negativo
let numero = prompt("Ingresa un número:");
numero = parseFloat(numero);
if (numero > 0) {
    alert("El número es positivo.");
} else if (numero < 0) {
    alert("El número es negativo.");
} else {
    alert("El número es cero.");
}

// Sistema de puntuación para un juego
let puntuacion = prompt("Ingresa tu puntuación:");
puntuacion = parseInt(puntuacion);
if (puntuacion >= 100) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Inténtalo nuevamente para ganar.");
}

// Mensaje con el saldo de la cuenta usando un template string
let saldo = 100000;                     
alert(`Tu saldo actual es de $${saldo}`);

// Pide al usuario su nombre y muestra una alerta de bienvenida
let usuario = prompt("Ingresa tu nombre:");
alert(`¡Bienvenido/a, ${usuario}!`);