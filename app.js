const boton = document.getElementById('boton');

const contenedor = document.querySelector('.contenedorsobre');


boton.addEventListener('click', () => {
    contenedor.classList.add('animacionactivada')
});

// 1. CONFIGURACIÓN DE LA FECHA DEL EVENTO
// Formato: "Month Day, Year HH:MM:SS"
const targetDate = new Date("Jan 23, 2026 00:00:00").getTime();

// Elementos del HTML
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const countdownContainer = document.getElementById("countdown-container");
const expiredMessage = document.getElementById("expired-message");

// Función para poner el cero inicial (ej: 05 en lugar de 5)
function formatNumber(number) {
    return number < 10 ? "0" + number : number;
}

// Actualización cada 1 segundo
const timerFunction = setInterval(function() {

    const now = new Date().getTime();
    const distance = targetDate - now;

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar en pantalla
    daysElement.innerHTML = formatNumber(days);
    hoursElement.innerHTML = formatNumber(hours);
    minutesElement.innerHTML = formatNumber(minutes);
    secondsElement.innerHTML = formatNumber(seconds);

    // Si la fecha ya pasó
    if (distance < 0) {
        clearInterval(timerFunction);
        countdownContainer.style.display = "none";
        expiredMessage.style.display = "block";
        expiredMessage.innerHTML = "¡El evento ha comenzado!";
    }

}, 1000);

const audio = document.getElementById('eventoAudio');
const playBtn = document.getElementById('playBtn');
const progressBar = document.getElementById('progress-bar');
const volSlider = document.getElementById('volSlider');

// Funcion Play / Pausa
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = "⏸";
    } else {
        audio.pause();
        playBtn.innerText = "▶";
    }
});

// Actualizar barra de progreso
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + "%";
});

// Control de volumen
volSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});