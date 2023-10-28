document.addEventListener("DOMContentLoaded", function () {

    const h1 = document.querySelector('h1');
    const select = document.querySelector('select');

    select.addEventListener('change', () => {
        h1.textContent = select.value;
    })
})