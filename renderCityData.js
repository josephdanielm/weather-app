export default async function renderCityData(cityName, weatherDataObject) {
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'absolute';

    
    const weatherData = await weatherDataObject;

    const currentName = document.getElementById('currentName');
    const currentRegion = document.getElementById('currentRegion');
    const currentCountry = document.getElementById('currentCountry');
    const currentTime = document.getElementById('currentTime');
    const currentCondition = document.getElementById('currentCondition');
    const currentTempF = document.getElementById('currentTempF');
    const currentTempC = document.getElementById('currentTempC');
    const currentWindDirection = document.getElementById('currentWindDirection');
    const currentWindMPH = document.getElementById('currentWindMPH');
    const currentInchesRain = document.getElementById('currentInchesRain');
    const currentIsDay = document.getElementById('displayConditionBar');

    const todayDate = document.getElementById('todayDate');
    const todayCondition = document.getElementById('todayCondition');
    const todayMinTempF = document.getElementById('todayMinTempF');
    const todayMinTempC = document.getElementById('todayMinTempC');
    const todayAvgTempF = document.getElementById('todayAvgTempF');
    const todayAvgTempC = document.getElementById('todayAvgTempC');
    const todayMaxTempF = document.getElementById('todayMaxTempF');
    const todayMaxTempC = document.getElementById('todayMaxTempC');
    const todayChanceOfRain = document.getElementById('todayChanceOfRain');

    const tomorrowDate = document.getElementById('tomorrowDate');
    const tomorrowCondition = document.getElementById('tomorrowCondition');
    const tomorrowMinTempF = document.getElementById('tomorrowMinTempF');
    const tomorrowMinTempC = document.getElementById('tomorrowMinTempC');
    const tomorrowAvgTempF = document.getElementById('tomorrowAvgTempF');
    const tomorrowAvgTempC = document.getElementById('tomorrowAvgTempC');
    const tomorrowMaxTempF = document.getElementById('tomorrowMaxTempF');
    const tomorrowMaxTempC = document.getElementById('tomorrowMaxTempC');
    const tomorrowChanceOfRain = document.getElementById('tomorrowChanceOfRain');

    const overmorrowDate = document.getElementById('overmorrowDate');
    const overmorrowCondition = document.getElementById('overmorrowCondition');
    const overmorrowMinTempF = document.getElementById('overmorrowMinTempF');
    const overmorrowMinTempC = document.getElementById('overmorrowMinTempC');
    const overmorrowAvgTempF = document.getElementById('overmorrowAvgTempF');
    const overmorrowAvgTempC = document.getElementById('overmorrowAvgTempC');
    const overmorrowMaxTempF = document.getElementById('overmorrowMaxTempF');
    const overmorrowMaxTempC = document.getElementById('overmorrowMaxTempC');
    const overmorrowChanceOfRain = document.getElementById('overmorrowChanceOfRain');
    

    currentName.innerText = cityName;
    currentRegion.innerText = weatherData.location.region;
    currentCountry.innerText = weatherData.location.country;
    currentTime.innerText = weatherData.location.localtime;
    currentCondition.innerText = weatherData.current.condition.text;
    currentTempF.innerText = weatherData.current.temp_f;
    currentTempC.innerText = weatherData.current.temp_c;
    currentWindDirection.innerText = weatherData.current.wind_dir;
    currentWindMPH.innerText = weatherData.current.wind_mph;
    currentInchesRain.innerText = weatherData.current.precip_in;
    if (weatherData.current.is_day === 0) {
        if (currentIsDay.classList.contains('isDay')) {
            currentIsDay.classList.remove('isDay')
        }
        currentIsDay.classList.add('isNight');
    } else {
        if (currentIsDay.classList.contains('isNight')) {
            currentIsDay.classList.remove('isNight')
        }
        currentIsDay.classList.add('isDay');

    }
    

    todayDate.innerText = weatherData.forecast.today.date;
    todayCondition.innerText = weatherData.forecast.today.condition.text;
    todayMinTempF.innerText = weatherData.forecast.today.mintemp_f;
    todayMinTempC.innerText = weatherData.forecast.today.mintemp_c;
    todayAvgTempF.innerText = weatherData.forecast.today.avgtemp_f;
    todayAvgTempC.innerText = weatherData.forecast.today.avgtemp_c;
    todayMaxTempF.innerText = weatherData.forecast.today.maxtemp_f;
    todayMaxTempC.innerText = weatherData.forecast.today.maxtemp_c;
    todayChanceOfRain.innerText = weatherData.forecast.today.chanceofrain;


    tomorrowDate.innerText = weatherData.forecast.tomorrow.date;
    tomorrowCondition.innerText = weatherData.forecast.tomorrow.condition.text;
    tomorrowMinTempF.innerText = weatherData.forecast.tomorrow.mintemp_f;
    tomorrowMinTempC.innerText = weatherData.forecast.tomorrow.mintemp_c;
    tomorrowAvgTempF.innerText = weatherData.forecast.tomorrow.avgtemp_f;
    tomorrowAvgTempC.innerText = weatherData.forecast.tomorrow.avgtemp_c;
    tomorrowMaxTempF.innerText = weatherData.forecast.tomorrow.maxtemp_f;
    tomorrowMaxTempC.innerText = weatherData.forecast.tomorrow.maxtemp_c;
    tomorrowChanceOfRain.innerText = weatherData.forecast.tomorrow.chanceofrain;

    overmorrowDate.innerText = weatherData.forecast.overmorrow.date;
    overmorrowCondition.innerText = weatherData.forecast.overmorrow.condition.text;
    overmorrowMinTempF.innerText = weatherData.forecast.overmorrow.mintemp_f;
    overmorrowMinTempC.innerText = weatherData.forecast.overmorrow.mintemp_c;
    overmorrowAvgTempF.innerText = weatherData.forecast.overmorrow.avgtemp_f;
    overmorrowAvgTempC.innerText = weatherData.forecast.overmorrow.avgtemp_c;
    overmorrowMaxTempF.innerText = weatherData.forecast.overmorrow.maxtemp_f;
    overmorrowMaxTempC.innerText = weatherData.forecast.overmorrow.maxtemp_c;
    overmorrowChanceOfRain.innerText = weatherData.forecast.overmorrow.chanceofrain;


    loadingOverlay.style.display = 'none';
}