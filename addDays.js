document.addEventListener("DOMContentLoaded", function () {

    const h1 = document.querySelector('#selected-month');
    const select = document.querySelector('.month');
    const daysOfTheMonth = document.querySelector('#days-of-the-month');

    select.addEventListener('change', () => {
        h1.textContent = select.value;
        addDays(select.value);
    })

    

    function addDays(selectedMonth) {
        let days = 0;
        if (selectedMonth === 'January') {
            days = 31;
        } else if (selectedMonth === 'February') {
            days = 28;
        } else {
            days = 0;
        }
        appendDays(days);
    }

    function appendDays(numDays) {
        daysOfTheMonth.innerHTML = '';

        for (let i = 1; i <= numDays; i++) {
            let listDay = document.createElement('li');
            listDay.textContent = i;
            daysOfTheMonth.appendChild(listDay);
        }
    }


})