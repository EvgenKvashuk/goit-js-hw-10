import './css/styles.css';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const refs = {
    input: document.querySelector("#search-box"),
    countryInfo: document.querySelector(".country-info"),
    countryList: document.querySelector(".country-list"),
};


// function markupC(countriItem) {
const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
    .map((technology) =>
        `<img src=" " alt="" class="" >
              <h1 class="name_js">Name:</h1>
              <p class="capital_js">Capital:</p>
              <p class="population_js">Population:</p>
              <p class="languages_js">Languages:</p>`)
    .join("");

    refs.countryInfo.insertAdjacentHTML("afterbegin", markup);
// };



refs.input.addEventListener('input', (evt) => {
    const inputName = refs.input.value

    if (inputName !== "") {
        fetch(`https://restcountries.com/v3.1/name/${inputName}?fields=name,capital,population,flags,languages`)
            .then(respone => {
                return respone.json();
            })
            .then(nameCountri => {
                // console.log(nameCountri)
                console.log(nameCountri[0])
                // console.log(nameCountri[0].name.official)
            })
            .then(name => {
            })
    }

});