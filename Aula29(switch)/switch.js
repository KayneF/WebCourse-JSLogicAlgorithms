// Switch case

const data = new Date();
const getDay = data.getDay();
let diaSemana;

// Solução com short-circuit
if (getDay === 0) diaSemana = 'Domingo';
if (getDay === 1) diaSemana = 'Segunda-feira';
if (getDay === 2) diaSemana = 'Terça-feira';
if (getDay === 3) diaSemana = 'Quarta-feira';
if (getDay === 4) diaSemana = 'Quinta-feira';
if (getDay === 5) diaSemana = 'Sexta-feira';
if (getDay === 6) diaSemana = 'Sábado';

console.log(diaSemana);

// ==================================================
// Solução com Switch case

const data2 = new Date();
const getDay2 = data.getDay();
let diaSemana2;

switch (getDay) {
    case 0: diaSemana2 = 'Domingo'; break;
    case 1: diaSemana2 = 'Segunda-feira'; break;
    case 2: diaSemana2 = 'Terça-feira'; break;
    case 3: diaSemana2 = 'Quarta-feira'; break;
    case 4: diaSemana2 = 'Quinta-feira'; break;
    case 5: diaSemana2 = 'Sexta-feira'; break;
    case 6: diaSemana2 = 'Sábado'; break;
    default: diaSemana2 = '';
}

console.log(diaSemana2);
