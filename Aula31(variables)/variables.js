// Variáveis (revisited)

const verdadeiro = true;

// Let tem escopo de bloco { ... bloco }
// Var tem escopo apenas de função

// Variável em escopo global
let nome = 'Jubileu';
var nome2 = 'Roberto';

if (verdadeiro) {
    let nome = 'Luís'; // Variável dentro do bloco
    console.log(nome, nome2);

    if (verdadeiro) {
        let nome = 'Jaime'; // Variável dentro do bloco aninhado
        console.log(nome, nome2);

        if (verdadeiro) {
            console.log(nome, nome2);
            // A variável é procurada dentro do bloco em que foi chamada,
            // como não foi declarada uma variável dentro deste bloco,
            // ele irá sair fora do escopo atual, e se não encontrar,
            // sairá de novo, e assim sucessivamente até ser encontrada.
        }
    }
}

// ========================================================================
var nome2 = 'Otávio'; // Note que esta variável foi redeclarada (linha 10)
var outroNome = 'Josh'

if (verdadeiro) {
    // No caso de 'var', a variável é redeclarada mesmo dentro do bloco,
    // diferente de 'let' que é criada dentro do escopo
    var nome2 = 'Otávio';
    console.log(outroNome, nome2);

    if (verdadeiro) {
        var nome2 = 'Rongo'; // Variável redeclarada dentro do bloco
        console.log(outroNome, nome2);

        if (verdadeiro) {
            console.log(outroNome, nome2);
        }
    }
}

console.log(nome, nome2);
// Para exemplificar melhor o que aconteceu, chamanos um log no escopo global.
// Vemos que a variável 'nome' exibe o que foi criado apenas no escopo global,
// como ela foi criada com o mesmo nome varias vezes, porém dentro de blocos,
// a variável se mantém como ela foi criada no escopo global, no caso 'Jubileu'.
// Já a variável 'nome2' foi redeclarada mesmo estando dentro de blocos,
// e nota-se que o nome 'Rongo' está sendo exibido, provando que a variável
// foi redefinida mesmo quando chamada no escopo global, o que significa que ela 
// foi redeclarada mesmo estando dentro de um bloco. 