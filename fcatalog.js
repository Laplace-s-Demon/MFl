document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', () => {
        const overlay = document.getElementById('overlay');
        const overlayContent = document.querySelector('.overlay-content');
        const title = item.querySelector('.item-header').textContent.replace('+', '').trim();
        let description = item.dataset.description;

        // Adiciona duas quebras de linha para Loli e Shota no item 9
        if (title === '9 - Loli/Shota') {
            description = description.replace('Loli', '<br><br>Loli');
            description = description.replace('Shota', '<br><br>Shota');
        }

        const note = item.dataset.note;
        const link = item.dataset.link;

        document.getElementById('overlay-title').textContent = title;
        document.getElementById('overlay-description').innerHTML = description;
        document.getElementById('overlay-note').textContent = note;
        document.getElementById('overlay-link').href = link;

        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        overlayContent.style.backgroundColor = 'white';
        overlay.style.display = 'flex';
    });
});

function fecharOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.classList.add('fade-out');
    setTimeout(() => {
        overlay.style.display = 'none';
        overlay.classList.remove('fade-out');
    }, 300);
}

document.getElementById('close-overlay').addEventListener('click', fecharOverlay);

window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('overlay')) {
        fecharOverlay();
    }
});