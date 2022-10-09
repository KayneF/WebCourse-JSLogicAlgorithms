// Teste ***
// Gera um valor aleatório de 1 à 500, 
// ele continua gerando até que o valor definido seja gerado.
// Porém, está dentro de outra condição, a qual define que
// apenas sairá do loop, quando conseguir gerar o valor definido
// na primeira tentativa.


// RNG
function randNum(min, max) {
    const rand = Math.random() * max + min;
    return Math.round(rand);
}

const min = 1;
const max = 500;
let index = 0;
let counter = 0;
let process = 0;

// Loop que define sucesso de primeira tentativa
do {
    index = 0;
    console.log('Gerando valores aleatórios...');

    // Loop que gera o valor aleatório
    do {
        var rand = randNum(min, max);
        if (rand !== 1) {
            console.log(rand);
        }
        index++;
        process++;
    } while (rand !== 1); // Valor definido

    console.log(rand);
    console.log(`Encontrado o valor ${rand}`);
    console.log(`Número de tentativas: ${index}`);
    console.log('');
    console.log('==============================');
    counter++;

} while (index !== 1);

console.log(`Número de tentativas para acertar na primeira: ${counter}`);
console.log(`Qty de números gerados: ${process}`);
console.log('==============================');
