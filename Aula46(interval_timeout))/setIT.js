// setInterval setTimeout

// Atribui um intervalo de tempo para executar uma determinada função
function setTime() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {});
}

/**
 * É necessário que uma função seja executada para que 'setInterval'
 * funcione. Nesse caso, basta usar uma função anônima.
 */
const timer = setInterval(function() { 
    console.log(setTime()) ;
}, 1000); // (função, tempo (milisegundos))

// Para uma função em execução em um determinado tempo
setTimeout(function() {
    clearInterval(timer);
    console.log('Fechando...');
}, 5000); // milisegundos
