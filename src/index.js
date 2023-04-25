// залишилось реалізувати:

// дебаунс

// перемикання між інтерфейсом для результатів декількох країн та однієї
// очишення інтерфейсу якщо поле пошику очищається - elem.remove();.
// Якщо довжина отриманого фетча один елемент тоді видалити елементи рендеру

// описати стілі для розмітки





import './css/styles.css';
import debounce from 'lodash.debounce';

// модулі
import fetchCountries from './js/fetch';

const DEBOUNCE_DELAY = 300;
const refs = {
    input: document.querySelector("#search-box"),
};

refs.input.addEventListener('input', (evt) => {
    const name = refs.input.value.trim()
    fetchCountries(name)
});