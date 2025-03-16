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