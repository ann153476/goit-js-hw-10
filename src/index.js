import './css/styles.css';
// all modules
import Notiflix from 'notiflix';

// one by one
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Report } from 'notiflix/build/notiflix-report-aio';
// import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
// import { Block } from 'notiflix/build/notiflix-block-aio';

const DEBOUNCE_DELAY = 300;


//https://restcountries.com/v3.1/name/united обьекты стран
//https://restcountries.com/v3.1/name/{name} 404 not found
 fetch (`https://restcountries.com/v3.1/name/united`);