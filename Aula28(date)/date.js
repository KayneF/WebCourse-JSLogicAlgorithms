// Datas

// Exibe data com parâmetros (Janeiro = 0)
const dataParam = new Date(2020, 0, 10, 22, 30); // a, m, d, h, M, s, ms
console.log(dataParam.toString());

// Exibe timestamp data string padrão
const dataFix = new Date('2020-01-10 22:30');
console.log(dataFix.toString());

// Exibe hora atual
const data = new Date(); 
console.log(data.toString());

// getDate (coleta parâmtros individuais)
const dataGet = new Date();
console.log('Dia: ', dataGet.getDate());
console.log('Mês: ', dataGet.getMonth()+1); // Mês começa do zero (Janeiro)
console.log('Ano: ', dataGet.getFullYear());
console.log('Hora: ', dataGet.getHours());
console.log('Min: ', dataGet.getMinutes());
console.log('seg: ', dataGet.getSeconds());
console.log('ms: ', dataGet.getMilliseconds());
console.log('Semana: ', dataGet.getDay()); // 0 = Doming0, 6 = Sábado
console.log(dataGet.toString());

// ===================================================================
// Função para formatar data e hora
function zeroEsquerda(num) {
    return num >=10 ? num : `0${num}`;
}

function formataData (data) {
    const dia = zeroEsquerda(dataGet.getDate());
    const mes = zeroEsquerda(dataGet.getMonth()+1);
    const ano = zeroEsquerda(dataGet.getFullYear());
    const hora = zeroEsquerda(dataGet.getHours());
    const min = zeroEsquerda(dataGet.getMinutes());
    const seg = zeroEsquerda(dataGet.getSeconds());

    return `${dia}/${mes}/${ano} - ${hora}:${min}:${seg}`;
}

const dataFormat = new Date();
const dataAgora = formataData(dataFormat);
console.log(dataAgora);
