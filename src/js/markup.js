import { refs } from "./refs";

export default function markupC(data) {
    console.log(data)

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