// For of
// Esse tipo de laço de repetição, acessa diretamente o valor ao invéz do índice

// Não funciona com objetos

const nome = 'Kayne Ferreira';

for (let valor of nome) {
    console.log(valor);
}

const pessoas = ['Otávio', 'Rongo', 'Jubileu', ];

for (let valor of pessoas) {
    console.log(valor);
}
// Repare que o log imprime diretamente a variável iterada no laço,
// porém, ao invéz de um contador, o laço exibe o valor dentro da variável
// diferente de um laço comum, que exibe sua posição (index)

// -------------------------
// For clássico - Geralmente com iteráveis (arrays ou strings)
// For in - Retorna índice ou chave (string, array ou objetos)
// For of - Retorna o valor (iteráveis, arrays ou strings)