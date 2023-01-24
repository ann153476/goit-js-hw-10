 function fetchCountries (value){
 return fetch (`https://restcountries.com/v3.1/name/${value}`)
    .then(data => data.json());
    // .then(data => console.log(data));
}
export const country = fetchCountries;

