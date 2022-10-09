
// const results = document.querySelector('.container h1');
// const data = new Date();
// const opt = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// };

// results.innerHTML = data.toLocaleDateString('pt-BR', opt);

const results = document.querySelector('.container h1');
const data = new Date();
results.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
// TIMESTYLE NÃO É SUPORTADO PELO FIREFOX*