document.querySelector('.f-list').addEventListener('click', () => {
    window.location.href = 'fcatalog.html';
});

document.querySelector('.t-list').addEventListener('click', () => {
    window.location.href = 'tcatalog.html'; // Redireciona para tcatalog.html
});

document.querySelector('.personagens').addEventListener('click', () => {
    window.location.href = 'pcatalog.html'; // Redireciona para pcatalog.html
});

document.getElementById('voltar-index').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', () => {
        const overlay = document.getElementById('overlay');
        const overlayContent = document.querySelector('.overlay-content');
        const title = item.querySelector('.item-header').textContent.replace('+', '').trim();
        let description = item.dataset.description;

        description = description.replace(/&#10;/g, '<br>').replace(/\n/g, '<br>');

        if (item.id === 'regras-btn') {
            description = description.replace(/&#10;/g, '<br>').replace(/\n/g, '<br>');
            document.getElementById('overlay-link').style.display = 'none'; // Esconde o link
        } else {
            document.getElementById('overlay-link').style.display = 'block'; // Mostra o link
        }

        const note = item.dataset.note;
        const link = item.dataset.link;

        document.getElementById('overlay-title').textContent = title;
        document.getElementById('overlay-description').innerHTML = description;
        document.getElementById('overlay-note').textContent = note;
        document.getElementById('overlay-link').href = link;

        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
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

document.getElementById('regras-btn').addEventListener('click', () => {
    const regrasBtn = document.getElementById('regras-btn');
    const overlay = document.getElementById('overlay');
    const overlayContent = document.querySelector('.overlay-content');
    const title = regrasBtn.querySelector('.item-header').textContent.replace('+', '').trim();
    let description = regrasBtn.dataset.description;

    description = description.replace(/&#10;/g, '<br>').replace(/\n/g, '<br>');
    document.getElementById('overlay-link').style.display = 'none'; // Esconde o link

    document.getElementById('overlay-title').textContent = title;
    document.getElementById('overlay-description').innerHTML = description;
    document.getElementById('overlay-note').textContent = '';

    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.display = 'flex';
});