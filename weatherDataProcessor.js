export default async function processWeatherData(data) {
    const weatherDataPromise = await data;
    const locationData = weatherDataPromise.location;
    const currentData = weatherDataPromise.current;
    const forecastData = weatherDataPromise.forecast.forecastday;

    const forecastToday = forecastData[0];
    const forecastTomorrow = forecastData[1];
    const forecastOvermorrow = forecastData[2];

    return {
        location: {
            name: locationData.name,
            region: locationData.region,
            country: locationData.country,
            localtime: locationData.localtime
        },
        current: {
            temp_f: currentData.temp_f,
            temp_c: currentData.temp_c,
            is_day: currentData.is_day,
            condition: currentData.condition,
            wind_mph: currentData.wind_mph,
            wind_dir: currentData.wind_dir,
            precip_in: currentData.precip_in,
            humidity: currentData.humidity,
            cloud: currentData.cloud,
            feelslike_c: currentData.feelslike_c,
            feelslike_f: currentData.feelslike_f,
            uv: currentData.uv
        },
        forecast: {
            today: {
                date: forecastToday.date,
                maxtemp_c: forecastToday.day.maxtemp_c,
                maxtemp_f: forecastToday.day.maxtemp_f,
                mintemp_c: forecastToday.day.mintemp_c,
                mintemp_f: forecastToday.day.mintemp_f,
                avgtemp_c: forecastToday.day.avgtemp_c,
                avgtem_f: forecastToday.day.avgtem_f,
                maxwind_mph: forecastToday.day.maxwind_mph,
                totalprecip_in: forecastToday.day.totalprecip_in,
                avghumidity: forecastToday.day.avghumidity,
                chanceofrain: forecastToday.day.daily_chance_of_rain,
                condition: forecastToday.day.condition,
                uv: forecastToday.day.uv
            },
            tomorrow: {
                date: forecastTomorrow.date,
                maxtemp_c: forecastTomorrow.day.maxtemp_c,
                maxtemp_f: forecastTomorrow.day.maxtemp_f,
                mintemp_c: forecastTomorrow.day.mintemp_c,
                mintemp_f: forecastTomorrow.day.mintemp_f,
                avgtemp_c: forecastTomorrow.day.avgtemp_c,
                avgtem_f: forecastTomorrow.day.avgtem_f,
                maxwind_mph: forecastTomorrow.day.maxwind_mph,
                totalprecip_in: forecastTomorrow.day.totalprecip_in,
                avghumidity: forecastTomorrow.day.avghumidity,
                chanceofrain: forecastTomorrow.day.daily_chance_of_rain,
                condition: forecastTomorrow.day.condition,
                uv: forecastTomorrow.day.uv
            },
            overmorrow: {
                date: forecastOvermorrow.date,
                maxtemp_c: forecastOvermorrow.day.maxtemp_c,
                maxtemp_f: forecastOvermorrow.day.maxtemp_f,
                mintemp_c: forecastOvermorrow.day.mintemp_c,
                mintemp_f: forecastOvermorrow.day.mintemp_f,
                avgtemp_c: forecastOvermorrow.day.avgtemp_c,
                avgtem_f: forecastOvermorrow.day.avgtem_f,
                maxwind_mph: forecastOvermorrow.day.maxwind_mph,
                totalprecip_in: forecastOvermorrow.day.totalprecip_in,
                avghumidity: forecastOvermorrow.day.avghumidity,
                chanceofrain: forecastOvermorrow.day.daily_chance_of_rain,
                condition: forecastOvermorrow.day.condition,
                uv: forecastOvermorrow.day.uv
            }
        }
    }
}