import getWeatherIn from "./weatherInCityFetcher";
import renderCityData from "./renderCityData";

export default function handleLocationSearchForm() {
    const locationSearchForm = document.getElementById('locationSearchForm');
    const locationSearchInput = document.getElementById('locationSearchInput');
    const loadingOverlay = document.getElementById('loadingOverlay');

    locationSearchForm.addEventListener("submit", (event) => {
        event.preventDefault();

        locationSearchInput.blur();
        locationSearchForm.blur();
        loadingOverlay.style.display = 'block';

        const searchedLocation = locationSearchInput.value;
        locationSearchInput.value = '';

        console.log('searching: ', searchedLocation);

        getWeatherIn(searchedLocation)
            .then((data) => {
                console.log(data);
                renderCityData(data.location.name, data);
                loadingOverlay.style.display = 'none';
            })
            .catch((err) => {
                console.log(err);
            })
            .finally((error) => {
                loadingOverlay.style.display = 'none';
                console.log(error);
            })

    });
}