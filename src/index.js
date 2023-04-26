import './css/styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetch';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector("#search-box");
const refs = {
    countryList: document.querySelector(".country-list"),
    countryInfo: document.querySelector(".country-info"),
};

input.addEventListener('input', debounce(evt => {
    const name = input.value.trim()

    console.log(name)

    if (name === '') {
        refs.countryList.innerHTML = '';
        refs.countryInfo.innerHTML = '';

        console.log('пусто')
    };

    debounce(fetchCountries(name), DEBOUNCE_DELAY)
}, DEBOUNCE_DELAY));