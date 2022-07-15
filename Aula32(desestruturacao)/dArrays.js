// Desestruturação em arrays

let a = 'A';
let b = 'B';
let c = 'C';

console.log(a, b, c);

const letras = [b, c, a]; // Array criado com valores das variáveis 'a, b, c'
[a, b, c] = letras; // Aqui as variáveis iniciais foram reatribuídas com os valores do array

// O array foi utilizado para reestruturar os valores das variáveis
// Com isso, a reatribuição é exibida na ordem em que foram reatribuídas
console.log(a, b, c);

// =============================================================================

// Com o operador 'rest', é possível reestruturar um array da seguinte forma:
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [primeiroValor, segundoValor, ...resto] = numeros;
// Os 2 primeiros valores são copiados para outras variáveis,
// e o restante dos valores são copiados dentro de um novo array.

console.log(primeiroValor, segundoValor);
console.log(resto);

// É possível pular valores de um array, utilizando espaços vazios
// nas variáveis que não se deseja utilizar
const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco, sete);

// É possível criar arrays dentro de arrays
// Desse modo criamos listas de arrays (Matrizes/Array multidimensional)
const listaNumeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(listaNumeros[1][1]); // Puxa o valor do da segunda posição do segundo array

// Desestruturação
// Como queremos utilizar o segundo array, o primeiro fica vazio
// Assim, para coletar o valor da terceira posição desse array,
// as primeiras posições ficam vazias
const [, [, , seis]] = listaNumeros;
console.log(seis);

// De uma forma mais simples, é possível desestruturar os arrays em partes
// de forma que, poderiamos desestrurar esses mesmos arrays de forma individual
const [array1, array2, array3] = listaNumeros;
console.log(array2[2]);
