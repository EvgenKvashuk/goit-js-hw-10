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

    markupC();
});




// function markupC(countriItem) {
//     return inputName
//         .map(({ name, capital, population, flags, languages }) => {
//             return  `<img src=" " alt="" class="" >
//             <h1 class="name_js">Name:</h1>
//             <p class="capital_js">Capital:</p>
//             <p class="population_js">Population:</p>
//             <p class="languages_js">Languages:</p>`;
//         })
//         .join("");
// }







function createGalleryCardMarkup(galleryItem) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>`;
        })
        .join("");
};

createGalleryCardMarkup();