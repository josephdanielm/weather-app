import './style.css';
import getWeatherIn from './weatherInCityFetcher';
import handleLocationSearchForm from './searchFormHandler';
import toggleFarenCel from './tempConvert';

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

toggleFarenCel();
document.getElementById('tempWrapper').addEventListener('click', toggleFarenCel);