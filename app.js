const boton = document.getElementById('boton');

const contenedor = document.querySelector('.contenedorsobre');


boton.addEventListener('click', () => {
    contenedor.classList.add('animacionactivada')
});