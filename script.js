document.addEventListener('DOMContentLoaded', function() {
    const imgContainer = document.querySelector('.img');
    const img = imgContainer.querySelector('img');

    imgContainer.addEventListener('mouseover', function() {
        img.style.transform = 'scale(1.05)'; // Ajuste a escala conforme necessário
    });

    imgContainer.addEventListener('mouseout', function() {
        img.style.transform = 'scale(1)'; // Restaura o tamanho original
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.buttonAnimado');
    const buttonText = document.createElement('span');
    buttonText.textContent = button.textContent;
    button.textContent = '';
    button.appendChild(buttonText);

    button.addEventListener('mouseover', function() {
        buttonText.style.transform = 'translateX(-100px)'; // Ajuste a distância conforme necessário
    });

    button.addEventListener('mouseout', function() {
        buttonText.style.transform = 'translateX(0)';
    });
});