import './css/styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetch';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector("#search-box");

input.addEventListener('input', debounce(evt => {
    const name = input.value.trim()
    debounce(fetchCountries(name), DEBOUNCE_DELAY)
}, DEBOUNCE_DELAY));