// Estrutura de repetição (while)

function randNum(min, max) {
    const rand = Math.random() * max + min;
    return Math.round(rand);
}

const min = 1;
const max = 50;
let rand = randNum(min, max);
let index = 0;

while (rand !== 1) {
    console.log(rand);
    index++
    rand = randNum(min, max);
}
index++;
console.log(rand);
console.log(`Número de tentativas 'while': ${index}`);
console.log('=======================================');
console.log();

index = 0;
do {
    console.log(rand);
    index++
    rand = randNum(min, max);
} while (rand !== 1);
index++;
console.log(rand);
console.log(`Número de tentativas 'do while': ${index}`);
console.log('=======================================');

// A estrutura 'while', primeiro checa a condição, e se ela não for satisfeita,
// o laço será executado até a condição for satisfeita.
// Caso a condição seja satisfeita antes de entrar no laço, o bloco não será executado.

// Já a estrutura 'do while', executa o bloco e depois checa a condição.
// Nesse caso, o bloco sempre será executado ao menos uma vez.
