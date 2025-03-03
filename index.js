const botao = document.querySelector('.botao');
const overlay = document.getElementById('overlay');
const confirmar = document.getElementById('confirmar');
const cancelar = document.getElementById('cancelar');

function fecharOverlay() {
    overlay.style.opacity = 0;
    setTimeout(() => {
        overlay.style.display = 'none';
        overlay.style.opacity = 1;
    }, 300);
}

botao.addEventListener('click', () => {
    overlay.style.display = 'flex';
});

confirmar.addEventListener('click', () => {
    window.location.href = 'categories.html';
});

cancelar.addEventListener('click', fecharOverlay);

window.addEventListener('click', (event) => {
    if (event.target === overlay) {
        fecharOverlay();
    }
});