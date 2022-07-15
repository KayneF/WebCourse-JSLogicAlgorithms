// Estrutura de repetição 'for'

for (let i=0; i<=10; i++) {
    console.log('Linha', i);
}

// Test
for (let i=0; i<=10; i++) {
    const rand = parseInt(Math.random()*100+1);
    const even = rand % 2 === 0 ? 'par' : 'ímpar';
    console.log(rand, even);
}

// Percorrer um array
const frutas = ['Maçã', 'Pêra', 'Banana', 'Mamão', 'Uva', 'Morango', 'Goiaba'];
for (let i=0; i<frutas.length; i++) {
    console.log(`Fruta ${i+1}: ${frutas[i]}`);
}
