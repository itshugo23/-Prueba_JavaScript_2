//Ejercicio 1: (en bucle)
const frase1 = prompt("hola que pasa");
const letra1 = prompt("hola que pasa");
let contador1 = 0;

for (let i = 0; i < frase1.length; i++) {
    if (frase1[i] === letra1) {
        contador1++;
    }
}

console.log(`La letra '${letra1}' aparece ${contador1} veces.`);

//Ejercicio 1: (en split)
const frase = prompt("Ihola que pasa");
const letra = prompt("hola que pasa");
const partes = frase.split(letra);
const contador = partes.length - 1;

console.log(`La letra '${letra}' aparece ${contador} veces.`);
