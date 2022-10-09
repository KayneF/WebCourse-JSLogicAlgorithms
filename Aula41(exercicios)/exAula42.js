/**
 * Escreva uma função chamada 'ePaisagem' que recebe dois argumentos,
 * largura e altura de uma imagem (number).
 * Retorne true se a imagem estiver no modo paisagem.
 */

function ePaisagem(x, y) {
    return x > y ? true : false;
}

function ePaisagem(x, y) {
    return x > y;
}

const ePaisagem = (x, y) => x > y;

console.log(ePaisagem(800, 600));
