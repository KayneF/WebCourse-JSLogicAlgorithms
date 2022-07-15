function setDateTime() {

    const dateTime = new Date();
    
    function setWeek() {
        const setWeek = dateTime.getDay();
        let dayOfTheWeek;
        switch (setWeek) {
            case 0: dayOfTheWeek = 'Domingo'; break;
            case 1: dayOfTheWeek = 'Segunda-feira'; break;
            case 2: dayOfTheWeek = 'Terça-feira'; break;
            case 3: dayOfTheWeek = 'Quarta-feira'; break;
            case 4: dayOfTheWeek = 'Quint-feira'; break;
            case 5: dayOfTheWeek = 'Sexta-feira'; break;
            case 6: dayOfTheWeek = 'Sábado'; break;
            default: dayOfTheWeek = ''; 
        }
        return dayOfTheWeek;
    }

    function setMonth() {
        const setMonth = dateTime.getMonth();
        let month;
        switch (setMonth) {
            case 0: month = 'Janeiro'; break;
            case 1: month = 'Fevereiro'; break;
            case 2: month = 'Março'; break;
            case 3: month = 'Abril'; break;
            case 4: month = 'Maio'; break;
            case 5: month = 'Junho'; break;
            case 6: month = 'Julho'; break;
            case 7: month = 'Agosto'; break;
            case 8: month = 'Setembro'; break;
            case 9: month = 'Outubro'; break;
            case 10: month = 'Novembro'; break;
            case 11: month = 'Dezembro'; break;
            default: month = ''; 
        }
        return month;
    }

    function getDate() {
        const week = setWeek();
        const month = setMonth();
        const day = dateTime.getDate();
        const year = dateTime.getFullYear();
        const hour = dateTime.getHours();
        const min = dateTime.getMinutes();
        return `${week}, ${day} de ${month} de ${year} - 
                ${leftZero(hour)}:${leftZero(min)}`;
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