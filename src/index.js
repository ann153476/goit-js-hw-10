 import './css/styles.css';
 import debounce from 'lodash.debounce';
 import Notiflix from 'notiflix';

import {country} from "./fetchCountries";





// // // one by one
// // // import { Notify } from 'notiflix/build/notiflix-notify-aio';
  const DEBOUNCE_DELAY = 300;
// // const a ="uk";

// // //https://restcountries.com/v3.1/name/united обьекты стран
// // //https://restcountries.com/v3.1/name/{name} 404 not found

// //  fetch (`https://restcountries.com/v3.1/name/${a}`)
// //  .then(data => data.json())
// //  .then(data => console.log(data) );
// //  ////////////////////////////////////////

// const body = document.querySelector('body');
const myInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

let inputCountry ="";
function hendleInput (e){
e.preventDefault();
if(myInput.value.trim()===""){
          Notiflix.Notify.failure('Введи букви а не пробіл а не пробіл:) ')
          return
          }
let countryObj = country(myInput.value.trim());
//console.log(myInput);
countryObj.then(
value =>{
        //  console.log(value,"<<<<<<");
        //  console.log(value.length);
        //  console.log(value[0].name.official);
        //  console.log(value[0].capital[0]);
        //  console.log(value[0].population);
        //  console.log(value[0].flags.svg);
        //  console.log(value[0].languages);
        
        if (value.length>10) {
            countryInfo.innerHTML = '';
            countryList.innerHTML = '';
          }
  
        if (value.length > 10) {
            countryInfo.innerHTML = '';
            countryInfo.innerHTML = '';
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
         } else if (value.length === 1) {
            countryInfo.innerHTML = '';
            countryList.innerHTML = '';
            const markup =`<div> 
           <h2>Name of country:  ${value[0].name.official}</h2>
<img src='${value[0].flags.svg}' alt='${value[0].name.official}' width='40' height = '30'>
           <p>Capital: ${value[0].name.official}</p>
           <p>Population of country: ${value[0].population}</p>
           <p>Language(s): ${Object.values(value[0].languages)} </p>`;
           countryInfo.insertAdjacentHTML("beforeend", markup);
         } else {
            countryInfo.innerHTML = '';
            const markup =value.map(
            ({ name, flags }) =>
              `<li>
              <p style="margin: 5px">${name.official}:</p>
              <img src="${flags.svg}" alt="${name.official}" width='20' height='15' >
              </li>`).join('');
          countryList.insertAdjacentHTML("beforeend", markup);
         }
        }
)
.catch(
  error => {
    countryInfo.innerHTML = '';
    countryList.innerHTML = '';
        Notiflix.Notify.failure('Oops, there is no country with that name')
      
    
       
  }      
);

//console.log(c.finally);

//fetchCountries(myInput.value.trim());//e если нужно то просто внутри неё
}

  myInput.addEventListener('input', debounce(hendleInput, DEBOUNCE_DELAY));