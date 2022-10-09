// Continue e Break

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// O comando continue faz com que todos os comandos abaixo de 'continue'
// que estão dentro do bloco sendo executado, seja pulado.
for (let numero of numeros) {
    if (numero === 2) { 
        console.log('Pulei o número', numero);
        continue; 
    }
    console.log(numero);
}
console.log();
// Nesse laço, o número 2 será pulado e o comando log da linha 12 
// não será executado nesse loop, já que está abaixo do comando continue.

// ==========================================================================
// Já o comando break, faz com que o bloco em execução pare de ser executado,
// assim que a condição expecificada for satisfeita.
for (let numero of numeros) {
    if (numero === 7) { 
        break; 
    }
    console.log(numero);
}
// Nesse caso, a condição é o número '7', ou seja, assim que o valor for encontrado,
// a execução do bloco será finalizada.
