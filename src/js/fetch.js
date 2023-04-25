export function fetchCountries(name) {

refs.input.addEventListener(
    'input', (evt) => {
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
        })
        .catch(error => {
            Notiflix.Notify.failure('Oops, there is no country with that name');
        });

});
}