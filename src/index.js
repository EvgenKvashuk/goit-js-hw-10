import './css/styles.css';
import Notiflix from 'notiflix';

// const DEBOUNCE_DELAY = 300;
// const refs = {
//     input: document.querySelector("#search-box")
// };

// refs.input, addEventListener('input', (evt) => {

// });


fetch ('https://restcountries.com/v3.1/name/Colombia').then(data => {
    console.log(data)
})
