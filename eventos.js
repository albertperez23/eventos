// eventos.js
document.addEventListener('DOMContentLoaded', function () {
    const divElement = document.getElementById('saludarDiv');
    divElement.addEventListener('click', function () {
        alert('Hola! Soy el div');
    });
});
