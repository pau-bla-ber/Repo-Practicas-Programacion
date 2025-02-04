document.getElementById('lang-btn').addEventListener('click', function() {
    document.getElementById('lang-menu').classList.toggle('hidden');
});

document.querySelectorAll('#lang-menu li').forEach(item => {
    item.addEventListener('click', function() {
        document.getElementById('lang-btn').textContent = this.dataset.lang;
        document.getElementById('lang-menu').classList.add('hidden');
    });
});