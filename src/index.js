import './css/styles.css';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const refs = {
    input: document.querySelector("#search-box"),
    countryInfo: document.querySelector(".country-info"),
    countryList: document.querySelector(".country-list"),
};

refs.input.addEventListener('input', (evt) => {
    const inputName = refs.input.value

    fetch(`https://restcountries.com/v3.1/name/${inputName}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {
            if (data.length > 10) {
                Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');

                return;
            }
            markupC(data)
            // console.log(data)

        })

});



function markupC(data) {
    console.log(data)

    if (data.length > 1) {
        const markup = data
            .map(({ capital , flags}) =>
                `<li class="country-item"><img src="${flags.svg}" alt="" width="40">${capital}</li>`)
            .join("");

        refs.countryList.insertAdjacentHTML("afterbegin", markup);
    }

    if (data.length = 1) {
        const markup = data
            .map(({ name, capital, population, flags, languages }) => `    
        <img src="${flags.svg}" alt="" width="40">
        <h2>${name.official}</h2>
        <ul>
          <li>Capital: ${capital}</li>
          <li>Population: ${population}</li>
          <li>Lanquages: ${languages}</li>
        </ul>`)
            .join("");

        refs.countryInfo.insertAdjacentHTML("afterbegin", markup);
    }

}


