import './css/styles.css';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const refs = {
    input: document.querySelector("#search-box"),
    list: document.querySelector('.markup'),
    countryList: document.querySelector(".country-list"),
};

// function markupC() {};

refs.input.addEventListener('input', (evt) => {
    const inputName = refs.input.value

    fetch(`https://restcountries.com/v3.1/name/${inputName}`)
        .then(respone => {
            return respone.json();
        })
        .then(nameCountri => {
            console.log(nameCountri.name)
        })
        .then(name => {
        })

});


