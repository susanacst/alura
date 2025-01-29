/*
===========================================
        OPERADORES LÓGICOS EN JAVASCRIPT
===========================================
*/

// Cuando escribimos programas en JavaScript, a menudo necesitamos tomar decisiones
// basadas en condiciones. Los operadores lógicos nos ayudan a crear una lógica
// sólida y eficaz.

/*
===========================================
                AND (&&)
===========================================
*/

// El operador AND (&&) se utiliza para combinar dos condiciones y evaluar
// si ambas son verdaderas. Si ambas condiciones son verdaderas, el resultado será true.
// De lo contrario, será false.

let edad = 25;
let tieneLicencia = true;

// Si la edad es mayor de 18 y tiene una licencia...
if (edad > 18 && tieneLicencia) {
    console.log("¡Puede conducir!");
} else {
    console.log("No puede conducir!");
}

/*
===========================================
                OR (||)
===========================================
*/

// El operador OR (||) se utiliza para verificar si al menos una de las condiciones es verdadera.
// Si una de las condiciones es verdadera, el resultado será true.
// Si ambas son falsas, el resultado será false.

let tieneManzana = false;
let tieneBanana = true;

// Si tiene manzana o tiene banana…
if (tieneManzana || tieneBanana) {
    console.log("¡Tienes frutas!");
} else {
    console.log("No tienes frutas.");
}

/*
===========================================
                NOT (!)
===========================================
*/

// El operador NOT (!) se utiliza para negar una condición.
// Devuelve true si la condición es falsa y false si la condición es verdadera.

let estaLloviendo = false;

console.log(!estaLloviendo); // Devuelve true porque estaLloviendo es false

let numero = 10;
console.log(!(numero == 5)); // Devuelve true porque numero NO es igual a 5
