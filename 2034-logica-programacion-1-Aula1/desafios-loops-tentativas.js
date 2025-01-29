// Contador del 1 al 10 con while
let contador1 = 1;
while (contador1 <= 10) {
    console.log(contador1);
    contador1++;
}

// Contador de 10 a 0 con while
let contador2 = 10;
while (contador2 >= 0) {
    console.log(contador2);
    contador2--;
}

// Cuenta regresiva desde un número ingresado por el usuario hasta 0
let numeroRegresivo = parseInt(prompt("Ingresa un número para la cuenta regresiva:"));
while (numeroRegresivo >= 0) {
    console.log(numeroRegresivo);
    numeroRegresivo--;
}

// Cuenta progresiva desde 0 hasta un número ingresado por el usuario
let numeroProgresivo = parseInt(prompt("Ingresa un número para la cuenta progresiva:"));
let contador3 = 0;
while (contador3 <= numeroProgresivo) {
    console.log(contador3);
    contador3++;
}
