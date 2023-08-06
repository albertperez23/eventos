document.addEventListener('DOMContentLoaded', function () {
    const divElement = document.getElementById('saludarDiv');
    divElement.addEventListener('click', function () {
        alert('Hola! Soy el div');
    });

    const botonElement = document.getElementById('saludarButton');
    botonElement.addEventListener('click', function (event) {
        alert('Hola!'); // Alerta del botón
        event.stopPropagation(); // Detener la propagación del evento
    });
});
