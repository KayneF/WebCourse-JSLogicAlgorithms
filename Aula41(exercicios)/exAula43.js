/**
 * Escreva uma função que recebe um número e retorne o seguinte valor:
 * Número é divisível por 3 = Fizz;
 * Número é divisível por 5 = Buzz;
 * Número é divisível por 3 e 5 = FizzBuzz;
 * Número não é divisível por 3 e 5 = Retorna o próprio número;
 * Checar se o número é realmente um número;
 * Use a função com números de 0 a 100;
 */

function getNumber(x) {
    if (!(x % 3 === 0) && !(x % 5 === 0)) return x; 
    if ((x % 3 === 0) && (x % 5 === 0)) return `${x} - FizzBuzz`; 
    if (x % 5 === 0) return `${x} - Buzz`; 
    if (x % 3 === 0) return `${x} - Fizz`; 
    if (isNaN(x)) return NaN;
}

console.log(getNumber(Math.round(Math.random()*100)));
