import './css/styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetch';
import { refs } from './js/refs';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(evt => {
    const name = refs.input.value.trim()

    console.log(name)

    if (name === '') {
        refs.countryList.innerHTML = '';
        refs.countryInfo.innerHTML = '';

        console.log('пусто')
    };

    fetchCountries(name)
}, DEBOUNCE_DELAY));