import './style.css';
import getWeatherIn from './weatherInCityFetcher';
import handleLocationSearchForm from './searchFormHandler';

handleLocationSearchForm();

console.log(await getWeatherIn('Lafayette'));
