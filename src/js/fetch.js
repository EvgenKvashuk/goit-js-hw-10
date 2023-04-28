export default function fetchCountries(name) {
    const FIELDS = "name,capital,population,flags,languages";
    const URL = `https://restcountries.com/v3.1/name/${name}?fields=${FIELDS}`;
    return fetch(URL)
};