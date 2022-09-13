const menue = document.querySelector('#menue');
const link = document.querySelector('#link');

menue.addEventListener('click', () => {
    if (link.classList.contains('hidden')) {
        link.classList.remove('hidden');
    } else {
        link.classList.add('hidden');
    }
})