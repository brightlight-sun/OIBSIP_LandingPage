// dark mode toggle
const nightMode_btn = document.querySelector('#checkbox');

nightMode_btn.addEventListener('change', function () {
    if (nightMode_btn.checked) {
        document.body.classList.add('night-mode');
    } else {
        document.body.classList.remove('night-mode');
    }
});
