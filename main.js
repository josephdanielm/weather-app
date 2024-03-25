import './style.css';
import getWeatherIn from './weatherInCityFetcher';
import handleLocationSearchForm from './searchFormHandler';
import toggleFarenCel from './tempConvert';
import renderCityData from './renderCityData';


handleLocationSearchForm();



document.getElementById('locationSearchForm').addEventListener('click', () => {
    document.getElementById('locationSearchInput').focus();
});

toggleFarenCel();
document.getElementById('tempWrapper').addEventListener('click', toggleFarenCel);

getWeatherIn('Lafayette')
            .then((data) => {
                console.log(data);
                renderCityData(data.location.name, data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally((error) => {
                console.log(error);
            })