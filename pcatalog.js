document.addEventListener('DOMContentLoaded', function() {
    const itens = document.querySelectorAll('.item');
    const overlay = document.getElementById('overlay');
    const overlayContent = document.querySelector('.overlay-content');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayDescription = document.getElementById('overlay-description');
    const overlayLink = document.getElementById('overlay-link');
    const closeOverlay = document.getElementById('close-overlay');
    const voltarBtn = document.getElementById('voltar-btn');

    itens.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.querySelector('.item-header').textContent.replace('+', '').trim();
            const description = item.dataset.description;
            const link = item.dataset.link;

            overlayTitle.textContent = title;
            overlayDescription.textContent = description;
            overlayLink.href = link;
            overlayLink.textContent = ""; //Adicionado para aparecer o texto do link.

            overlay.style.display = 'flex';
        });
    });

    function fecharOverlay() {
        overlay.style.display = 'none';
    }

    voltarBtn.addEventListener('click', () => {
        window.location.href = 'categories.html'; // Substitua pelo URL desejado
    });

    closeOverlay.addEventListener('click', fecharOverlay);

    window.addEventListener('click', (event) => {
        if (event.target === overlay) {
            fecharOverlay();
        }
    });
});