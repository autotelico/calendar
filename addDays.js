document.addEventListener("DOMContentLoaded", function () {

    const h1 = document.querySelector('#selected-month');
    const select = document.querySelector('.month');
    const daysOfTheMonth = document.querySelector('#days-of-the-month');

    select.addEventListener('change', () => {
        if (select.value === '-Select-') {
            h1.textContent = '(You actually have to select a month!)';
            h1.style.fontStyle = 'italic';
        } else {
        h1.style.fontStyle = '';
        h1.textContent = select.value;
        getDays(select.value);
        }
    })

    

    function getDays(selectedMonth) {
        let days = 0;
        switch (selectedMonth) {
            case 'January':
            case 'March':
            case 'May':
            case 'July':
            case 'August':
            case 'October':
            case 'December':
                days = 31;
                break;
            case 'April':
            case 'June':
            case 'September':
            case 'November':
                days = 30;
                break;
            case 'February':
                days = 28;
                break;
            default:
                days = 0;
        }
        appendDays(days);
    }

    function appendDays(days) { // would work with any name between the ()
        daysOfTheMonth.innerHTML = '';
            for (let i = 1; i <= days; i++) {
                let listDay = document.createElement('li');
                listDay.textContent = i;
                daysOfTheMonth.appendChild(listDay);
            }
            if (days === 0) {
                clearDays();
            }
    }
    

    function clearDays() {
            while (daysOfTheMonth.firstChild) {
                daysOfTheMonth.removeChild(daysOfTheMonth.firstChild);
            }
        }
    }
)