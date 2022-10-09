// try catch finally

function test() {
    try {
        // Executa quando não há erros
        console.log('Abrindo arquivo');
        console.log('Modificando arquivo');
        console.log('Salvando alterações');
        console.log(unalocatedVar);
        console.log('Fechando arquivo');
    } catch (error) {
        // Executa quando há erros
        console.log('Houve um erro ao tentar salvar alterações');
        console.log(error);
    } finally {
        // Bloco será executado, independente da possibilidade de erro no bloco 'try'
        console.log('FINALLY: Fechando arquivo');
    }
}

/**
 * O 'try catch' pode ser utilizado quando se tem uma possibilidade de erro.
 * Por exemplo, ao se manipular arquivos, o arquivo precisa ser aberto para
 * ser manipulado, após manipular, o arquivo é salvo em disco e fechado em
 * seguida. Caso um erro ocorra dentro do bloco 'try', a ação seguinte não será 
 * executada e ele cairá no bloco 'catch', onde o erro poderá ser tratado.
 * Porém o arquivo ainda precisa ser fechado, e é aí onde entra o bloco 'finally',
 * pois independente do arquivo ter sido salvo ou não, ele precisará ser fechado,
 * e podemos executar essa ação dentro do bloco 'finally', já que esse bloco
 * sempre será executado.
 */

function getTime(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Instância precisa ser do tipo "Date".');
    }
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
        // hour12: true
    });   
}

try {
    // const data = new Date('01-01-1970 12:58:12');
    const data = new Date();
    const hora = getTime(data);
    // const hora = getTime(11);
    console.log('Olá! Agora são', hora);
} catch (error) {
    console.log('Ocorreu um erro ao tentar retornar a hora.');
} finally {
    console.log('Tenha um bom dia!');
}
