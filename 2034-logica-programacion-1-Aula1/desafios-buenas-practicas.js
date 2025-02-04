// 1
console.log('Bienvenido al programa'); 

// 2
let nombre = "Susana";
console.log(`¡Hola, ${nombre}!`); 

// 3
alert(`¡Hola, ${nombre}!`); 

// 4
let lenguaje = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(`Tu lenguaje favorito es: ${lenguaje}`); 

// 5
let valor1 = 12;
let valor2 = 215;
let resultadoSuma = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a: ${resultadoSuma}`); 

// 6
let resultadoResta = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a: ${resultadoResta}`);

// 7
let edad = prompt("Ingresa tu edad:");
if (edad >= 18) { 
    console.log("Ya eres mayor de edad.");
} else {
    console.log("Aún no eres mayor de edad.");
}

// 8
let numero = prompt("Ingresa un número:");
if (numero >= 0) { 
    console.log("El número es positivo");
} else {
    console.log("El número es negativo");
}

// 9
let contador = 0;
while (contador <= 10) { 
    console.log(contador);
    contador++;
}

// 10
let nota = prompt("Ingresa tu calificación");
if (nota >= 7) { 
    console.log("¡Felicidades, aprobaste!");
} else {
    console.log("Lo siento, no aprobaste.");
}

// 11
let numeroAleatorio1 = Math.floor(Math.random() * 10) + 1;
console.log(numeroAleatorio1); 

// 12
let numeroAleatorio2 = Math.floor(Math.random() * 1000) + 1;
console.log(numeroAleatorio2); 