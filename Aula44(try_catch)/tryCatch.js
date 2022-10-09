// try catch

/**
 * Isola um bloco ou variável que possui um possível erro,
 * fazendo com que possamos coletar e tratar o problema de 
 * forma devida.
 */

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('Um ou mais valores inseridos não são numéricos.');
    }
    return x + y;
}

/**
 * Colocamos o que será executado dentro de um bloco 'try'
 * para tentar executar, caso consiga, ele será executado normalmente,
 * caso contrário, ele cairá no 'catch' e executará o tratamento.
 */
try { // Bloco executado quando não há erros
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (e) { // Bloco executado quando algum erro é capturado
    console.log(e);
}
