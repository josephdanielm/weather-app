import processWeatherData from "./weatherDataProcessor";

export default async function getWeatherIn(city) {
    try {

        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=b43a9d1e821b4ba5b2b04526241803&q=${city}&days=3&aqi=no&alerts=no`);

        if (!response.ok) {
            throw new Error(`${response.status}`);
        }
                
        const data = await response.json();

        return(processWeatherData(data));

    } catch (err) {
        console.error(err);
    }
    return null;
}