export const renderWeather = response => {
    const isNotValid = INPUT_LOCATION.value === ''
      isNotValid ? NOW.LOCATION.textContent = '' : NOW.LOCATION.textContent = response.name
    NOW.LOCATION.textContent = response.name;
    NOW.TEMPERATURE.textContent = `${Math.round(response.main.temp)}` + '\xb0';
    NOW.WEATHER_ICON.src = `${URLS.SERVER_ICON}${response.weather[0].icon}@4x.png`;
    DETAILS.LOCATION.textContent = response.name;
    DETAILS.TEMP.textContent = `${Math.round(response.main.temp)}` + '\xb0';
    DETAILS.FEELS_LIKE.textContent = `Feels like: ${Math.round(response.main.feels_like)}` + '\xb0';
    DETAILS.WEATHER.textContent = `Weather: ${response.weather[0].description}`;
    DETAILS.SUNRISE.textContent = `Sunrise: ${convertTime(response.sys.sunrise)}`;
    DETAILS.SUNSET.textContent = `Sunset: ${convertTime(response.sys.sunset)}`;
    
}

export const renderForecast = response => {
  
for (let i = 0; i <= 4; i++) {
FORECAST.LOCATION.textContent = response.city.name;
document.querySelector(`.date__${i}`).textContent = `${convertForecastDay(response.list[i].dt_txt)}`;
document.querySelector(`.temp__${i}`).textContent = `Temperature: ${Math.round(response.list[i].main.temp)}` + '\xb0';
document.querySelector(`.feels__${i}`).textContent = `Feels like: ${Math.round(response.list[i].main.feels_like)}` + '\xb0';
document.querySelector(`.time__${i}`).textContent = `${convertForecastTime(response.list[i].dt_txt)}`;
document.querySelector(`.descr__${i}`).textContent = response.list[i].weather[0].description;
document.querySelector(`.img__${i}`).src = `${URLS.SERVER_ICON}${response.list[i].weather[0].icon}.png`;
}
}