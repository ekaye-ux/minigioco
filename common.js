AFRAME.registerComponent('frame-rate-limiter', {
    tick: function (time, deltaTime) {
        
        if (deltaTime < 1000 / 90) {
            return; 
        }
        
    }
});

let startTime = null;
let timerInterval = null;

function startTimer() {
    if (!sessionStorage.getItem('startTime')) {
        sessionStorage.setItem('startTime', Date.now());
    }
    startTime = parseInt(sessionStorage.getItem('startTime'), 10);

    const timerElement = document.querySelector('#timer');

    timerInterval = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsedTime / 60);
        const seconds = elapsedTime % 60;

        timerElement.setAttribute('text', `value: Tempo: ${minutes}m ${seconds}s; align: center; color: white`);
    }, 1000);
}

// Avvia il timer al caricamento della pagina
document.addEventListener('DOMContentLoaded', () => {
    startTimer();
});



