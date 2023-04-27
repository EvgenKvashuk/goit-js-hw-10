import Notiflix from 'notiflix';
import markupC from './markup.js';
import { refs } from './refs.js';


export default function fetchCountries(name) {

// Rest Countries v2
const FIELDS = "name,capital,population,flags,languages";
const URL = `https://restcountries.com/v3.1/name/${name}?fields=${FIELDS}`;

fetch(URL)
.then(response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
})
.then(data => {
    if (data.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');

        refs.countryList.innerHTML = '';
        refs.countryInfo.innerHTML = '';
        
        return;
    }
    markupC(data)
})
.catch(error => {
    Notiflix.Notify.failure('Oops, there is no country with that name');
});
};