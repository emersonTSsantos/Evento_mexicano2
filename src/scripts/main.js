AOS.init();

// Contador para o evento
const dataDoEvento = new Date("Dec 03, 2024 19:30:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOevento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOevento = Math.floor((distanciaAteOEvento % diaEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

    const contadorElement = document.getElementById('contador');
    if (contadorElement) {
        if (distanciaAteOEvento >= 0) {
            contadorElement.innerHTML = `${diasAteOevento}d ${horasAteOevento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
        } else {
            clearInterval(contaAsHoras);
            contadorElement.innerHTML = 'Evento expirado';
        }
    }
}, 1000);

// Função para controlar o carrossel de imagens
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const carouselInner = carousel.querySelector('.carousel__inner');
    const prevButton = carousel.querySelector('.carousel__prev');
    const nextButton = carousel.querySelector('.carousel__next');

    let currentIndex = 0;
    const images = carouselInner.querySelectorAll('img');
    const totalImages = images.length;

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    showImage(currentIndex);

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    });
});
