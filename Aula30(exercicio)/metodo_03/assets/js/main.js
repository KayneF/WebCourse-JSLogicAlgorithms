function setDateTime() {

    const dateTime = new Date();
    
    function setWeek(w) {
        const dayOfTheWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 
                        'Quarta-feira', 'Quinta-feira', 'Sexta-feira',
                        'Sábado'];
        return dayOfTheWeek[w];
    }

    function setMonth(m) {
        const month = ['Janeiro', 'Fevereiro', 'Março', 'Abril',
                        'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
                        'Outubro', 'Novembro', 'Desembro'];
        return month[m];
    }

    function getDate() {
        const week = setWeek(dateTime.getDay());
        const month = setMonth(dateTime.getMonth());
        return `${week}, ${dateTime.getDate()} de ${month} de 
                ${dateTime.getFullYear()} - 
                ${leftZero(dateTime.getHours())}:
                ${leftZero(dateTime.getMinutes())}`;
    }

    function setResults(data) {
        const results = document.querySelector('.container');
        results.innerHTML = '';

        const h = createHeader();
        h.innerHTML = data;
        results.appendChild(h);
    }

    function createHeader() {
        const h = document.createElement('h1');
        return h;
    }

    function leftZero(num) {
        return num >= 10 ? num : `0${num}`;
    }

    const data = getDate();
    setResults(data);
}

setDateTime();

// const results = document.querySelector('.container h1');
// const data = new Date();
// results.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
