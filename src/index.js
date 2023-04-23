import './css/styles.css';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const refs = {
    input: document.querySelector("#search-box"),
    countryInfo: document.querySelector(".country-info"),
    countryList: document.querySelector(".country-list"),
};

// for one found countrie
function markupC() {
    return data.map(
        ({ flags, name, capital, population, lenguages }) =>
            `
            <img src="${flags.svg}" alt="flags" class="" >
            <h1 class="name_js">Name:${name.official}</h1>
            <p class="capital_js">Capital:${capital}</p>
            <p class="population_js">Population:${population}</p>
            <p class="languages_js">Languages:${lenguages}</p>
            `
    );
};


// for biger then ten results in search results


const data = refs.input.addEventListener('input', (evt) => {
    const inputName = refs.input.value

    if (inputName !== "") {
        fetch(`https://restcountries.com/v3.1/name/${inputName}?fields=name,capital,population,flags,languages`)
            .then(respone => {
                return respone.json();
            })
            .then(nameCountris => {
                if (nameCountris.length > 10) {
                    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
                } else {

                }
            })
            .then(name => {
            })

 
    }

});