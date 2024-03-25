export default async function processWeatherData(data) {
    const weatherDataPromise = await data;
    const locationData = weatherDataPromise.location;
    const currentData = weatherDataPromise.current;
    const forecastData = weatherDataPromise.forecast.forecastday;

    const forecastToday = forecastData[0];
    const forecastTomorrow = forecastData[1];
    const forecastOvermorrow = forecastData[2];

    function convertToStandardTime(militaryTime) {
    const [hours, minutes] = militaryTime.split(':');
    return `${(hours % 12) || 12}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
    }

    return {
        location: {
            name: locationData.name,
            region: locationData.region,
            country: locationData.country,
            localtime: convertToStandardTime((locationData.localtime).slice(-5))
        },
        current: {
            temp_f: `${Math.round(currentData.temp_f)} F`,
            temp_c: `${Math.round(currentData.temp_c)} C`,
            is_day: currentData.is_day,
            condition: currentData.condition,
            wind_mph: `${currentData.wind_mph} mph`,
            wind_dir: currentData.wind_dir,
            precip_in: `${currentData.precip_in}" rainfall`,
            humidity: `${currentData.humidity}% Humidity`,
            cloud: currentData.cloud,
            feelslike_c: currentData.feelslike_c,
            feelslike_f: currentData.feelslike_f,
            uv: `UV: ${currentData.uv}`
        },
        forecast: {
            today: {
                date: (forecastToday.date).slice(-5),
                maxtemp_c: `Max:\n ${Math.round(forecastToday.day.maxtemp_c)} C`,
                maxtemp_f: `Max:\n ${Math.round(forecastToday.day.maxtemp_f)} F`,
                mintemp_c: `Min:\n ${Math.round(forecastToday.day.mintemp_c)} C`,
                mintemp_f: `Min:\n ${Math.round(forecastToday.day.mintemp_f)} F`,
                avgtemp_c: `Avg:\n ${Math.round(forecastToday.day.avgtemp_c)} C`,
                avgtemp_f: `Avg:\n ${Math.round(forecastToday.day.avgtemp_f)} F`,
                maxwind_mph: forecastToday.day.maxwind_mph,
                totalprecip_in: forecastToday.day.totalprecip_in,
                avghumidity: forecastToday.day.avghumidity,
                chanceofrain: `${forecastToday.day.daily_chance_of_rain}%\nCoR`,
                condition: forecastToday.day.condition,
                uv: forecastToday.day.uv
            },
            tomorrow: {
                date: (forecastTomorrow.date).slice(-5),
                maxtemp_c: `Max:\n ${Math.round(forecastTomorrow.day.maxtemp_c)} C`,
                maxtemp_f: `Max:\n ${Math.round(forecastTomorrow.day.maxtemp_f)} F`,
                mintemp_c: `Min:\n ${Math.round(forecastTomorrow.day.mintemp_c)} C`,
                mintemp_f: `Min:\n ${Math.round(forecastTomorrow.day.mintemp_f)} F`,
                avgtemp_c: `Avg:\n ${Math.round(forecastTomorrow.day.avgtemp_c)} C`,
                avgtemp_f: `Avg:\n ${Math.round(forecastTomorrow.day.avgtemp_f)} F`,
                maxwind_mph: forecastTomorrow.day.maxwind_mph,
                totalprecip_in: forecastTomorrow.day.totalprecip_in,
                avghumidity: forecastTomorrow.day.avghumidity,
                chanceofrain: `${forecastTomorrow.day.daily_chance_of_rain}%\nCoR`,
                condition: forecastTomorrow.day.condition,
                uv: forecastTomorrow.day.uv
            },
            overmorrow: {
                date: (forecastOvermorrow.date).slice(-5),
                maxtemp_c: `Max:\n ${Math.round(forecastOvermorrow.day.maxtemp_c)} C`,
                maxtemp_f: `Max:\n ${Math.round(forecastOvermorrow.day.maxtemp_f)} F`,
                mintemp_c: `Min:\n ${Math.round(forecastOvermorrow.day.mintemp_c)} C`,
                mintemp_f: `Min:\n ${Math.round(forecastOvermorrow.day.mintemp_f)} F`,
                avgtemp_c: `Avg:\n ${Math.round(forecastOvermorrow.day.avgtemp_c)} C`,
                avgtemp_f: `Avg:\n ${Math.round(forecastOvermorrow.day.avgtemp_f)} F`,
                maxwind_mph: forecastOvermorrow.day.maxwind_mph,
                totalprecip_in: forecastOvermorrow.day.totalprecip_in,
                avghumidity: forecastOvermorrow.day.avghumidity,
                chanceofrain: `${forecastOvermorrow.day.daily_chance_of_rain}%\nCoR`,
                condition: forecastOvermorrow.day.condition,
                uv: forecastOvermorrow.day.uv
            }
        }
    }
}