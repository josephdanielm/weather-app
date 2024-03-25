import getWeatherIn from "./weatherInCityFetcher";

export default function handleLocationSearchForm() {
    const locationSearchForm = document.getElementById('locationSearchForm');
    const locationSearchInput = document.getElementById('locationSearchInput');

    locationSearchForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const searchedLocation = locationSearchInput.value;
        locationSearchInput.value = '';

        console.log('searching: ', searchedLocation);

        getWeatherIn(searchedLocation)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })

    });
}