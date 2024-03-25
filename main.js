import './style.css';
import getWeatherIn from './weatherInCityFetcher';
import handleLocationSearchForm from './searchFormHandler';

handleLocationSearchForm();


getWeatherIn('Lafayette')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

document.getElementById('locationSearchForm').addEventListener('click', () => {
    document.getElementById('locationSearchInput').focus();
});