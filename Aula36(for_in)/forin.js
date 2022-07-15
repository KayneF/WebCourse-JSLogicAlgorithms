// For in (for each in the array)

// Pode ser utilizado em objetos

// Arrays
const frutas = ['Maçã', 'Uva', 'Melancía'];

for (let index in frutas) {
    console.log(index); // log index
    console.log(frutas[index]); // log ítens do array
}

// Objetos
const pessoas = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
}

for (let key in pessoas) {
    console.log(key); // log atributos
    console.log(pessoas[key]); // log valores de atributos
}

// -------------------------
// For clássico - Geralmente com iteráveis (arrays ou strings)
// For in - Retorna índice ou chave (string, array ou objetos)
// For of - Retorna o valor (iteráveis, arrays ou strings)