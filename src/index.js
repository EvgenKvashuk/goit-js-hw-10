// залишилось реалізувати:


// перемикання між інтерфейсом
// elem.remove();?
// Якщо довжина отриманого фетча один елемент тоді видалити елементи рендеру з списком країн

import './css/styles.css';
import debounce from 'lodash.debounce';

// модулі
import fetchCountries from './js/fetch';

const DEBOUNCE_DELAY = 300;
const refs = {
    input: document.querySelector("#search-box"),
};

refs.input.addEventListener('input', debounce(evt => {
    const name = refs.input.value.trim()

    debounce(fetchCountries(name), DEBOUNCE_DELAY)
}, DEBOUNCE_DELAY));
