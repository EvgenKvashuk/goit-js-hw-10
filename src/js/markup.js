export default function markupC(data) {
    console.log(data)

    const refs = {
        countryList: document.querySelector(".country-list"),
        countryInfo: document.querySelector(".country-info"),
        marcupInfoJs: document.querySelector('.marcup-info-js')
    }


    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';

    if (data.length < 2) {
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
            <li>Lanquages: ${languages}</li>
            </ul>
            </div>`)
            .join("");
        refs.countryInfo.insertAdjacentHTML("afterbegin", markup);
    }

    if (data.length > 1 && data.length < 10) {
        const markup = data
            .map(({ name, flags }) =>
                `<li class="country-item"><img src="${flags.svg}" alt="" width="40">${name.official}</li>`)
            .join("");

        refs.countryList.insertAdjacentHTML("afterbegin", markup);
    };
};

