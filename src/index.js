import './css/styles.css';

import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import fetchCountries from './js/fetch';
import { refs } from './js/refs';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(evt => {
  const name = refs.input.value.trim()

  if (name === '') {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';

    console.log('пусто')
  };

  fetchCountries(name)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
      }
      markupC(data)
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}, DEBOUNCE_DELAY));

function markupC(data) {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';

  if (data.length > 0 && data.length < 2) {
    const markup = data
      .map(({ name, capital, population, flags, languages }) => ` 
            <div class="marcup-info-js"> 
            <div class="wrap">
            <img src="${flags.svg}" alt="" width="40">
            <h2>${name.official}</h2>
            </div>
            <ul class="info-list">
            <li>Capital: ${capital}</li>
            <li>Population: ${population}</li>
            <li>Lanquages: ${Object.values(languages).join(', ')}</li>
            </ul>
            </div>`)
      .join("");
    refs.countryInfo.insertAdjacentHTML("afterbegin", markup);
  };

  if (data.length > 1 && data.length < 10) {
    const markup = data
      .map(({ name, flags }) =>
        `<li class="country-item"><img src="${flags.svg}" alt="" width="40">${name.official}</li>`)
      .join("");

    refs.countryList.insertAdjacentHTML("afterbegin", markup);
  };
};