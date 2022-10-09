
function fullTimer() {
    const clock = document.querySelector('.clock');
    let seconds = 0;
    let timer;

    function getTimeSeconds(secs) {
        const seconds = new Date(secs * 1000);
        return seconds.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    function startTimer() {
        timer = setInterval(function () {
            seconds++;
            clock.innerHTML = getTimeSeconds(seconds);
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const element = e.target;
        if (element.classList.contains('start')) {
            clock.classList.remove('paused');
            clearInterval(timer);
            startTimer();
        }
        if (element.classList.contains('pause')) {
            clearInterval(timer);
            clock.classList.add('paused');
        }
        if (element.classList.contains('stop')) {
            clearInterval(timer);
            clock.innerHTML = '00:00:00';
            clock.classList.remove('paused');
            seconds = 0;
        }
    });
}

fullTimer();
