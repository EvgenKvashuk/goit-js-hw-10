import './css/styles.css';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const refs = {
    input: document.querySelector("#search-box"),
    list: document.querySelector('.markup'),
    countryList: document.querySelector(".country-list"),
};

function markupC() {
};

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



