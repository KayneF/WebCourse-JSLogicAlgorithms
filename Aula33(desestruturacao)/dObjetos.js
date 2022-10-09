// Desestruturação de Objetos

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30, 
    endereco: { // Objeto criado dentro do objeto
        rua: 'Av. Brasil',
        numero: 320
    }
};

console.log(pessoa);

console.log(pessoa.nome); // Acesso ao item do objeto

// Desestruturação
// Extrai-se um valor do objeto e atribui a uma variavel de mesmo nome.
// Caso queira utilizar uma variável de nome diferente, é possível.
// Também é possível atribuir valores padrões, e caso o valor do obejto
// não exista, o valor padrão é utilizado.
const {nome = 'Sem nome', sobrenome, idade: anos, endereco} = pessoa;
console.log(nome, sobrenome, anos, endereco);
// Note que o endereço foi exibido como um objeto

// Caso queira os valores do objeto criados dentro do objeto: 
const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);

// Em objetos, também é possível utilizar o 'rest'
const {nome: nome2, sobrenome: sobrenome2, ...resto} = pessoa;
console.log(nome2, sobrenome2, resto);
