import { URLS, NOW, btns, DETAILS, FAVORITES, FORECAST } from "./view.js";
import {  createDiv, convertForecastDay, convertForecastTime, setDefaultStart, convertTime} from "./helper.js";
// import {renderWeather, renderForecast} from "./render.js";

const INPUT_LOCATION = document.querySelector('.search-input');
const SEARCH_LOCATION = document.querySelector('.search-btn');
FAVORITE_CITY_LIST = []
FAVORITE_CITY_LIST = JSON.parse(localStorage.getItem('storage'));
 if (FAVORITE_CITY_LIST == null) return;

window.addEventListener('load', () => {
	FAVORITE_CITY_LIST.map(item => {
    FAVORITES.RIGHT_TEXT.insertAdjacentHTML("beforeend",
        `<div class="city-favorite">
        <div class="city">${item}</div>
        <img class="clear-img" src="img/x.png" alt="remove">
      </div>`)
		document.querySelectorAll('.clear-img').forEach(item => item.addEventListener('click', deleteCity));
		document.querySelectorAll('.city').forEach(item => item.addEventListener('click', chooseFromFavorites));
	})
	INPUT_LOCATION.value = localStorage.getItem('currentCity');
	getForecast()
  
})

 const renderWeather = response => {
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

const renderForecast = response => {
for (let i = 0; i <= 4; i++) {
  document.querySelector('.info-left__forecast-text').textContent = response.city.name;
document.querySelector(`.date__${i}`).textContent = `${convertForecastDay(response.list[i].dt_txt)}`;
document.querySelector(`.temp__${i}`).textContent = `Temperature: ${Math.round(response.list[i].main.temp)}` + '\xb0';
document.querySelector(`.feels__${i}`).textContent = `Feels like: ${Math.round(response.list[i].main.feels_like)}` + '\xb0';
document.querySelector(`.time__${i}`).textContent = `${convertForecastTime(response.list[i].dt_txt)}`;
document.querySelector(`.descr__${i}`).textContent = response.list[i].weather[0].description;
document.querySelector(`.img__${i}`).src = `${URLS.SERVER_ICON}${response.list[i].weather[0].icon}.png`;
}
}

// ===get response  acync await

async function getForecast () {
   let cityName = INPUT_LOCATION.value;
   const urlWeather = `${URLS.SERVER}?q=${cityName}&appid=${URLS.API_KEY}&units=metric`;
   const urlForecast = `${URLS.SERVER_FORECAST}?q=${cityName}&appid=${URLS.API_KEY}&units=metric`;
 try {
    const responseWeather = await fetch(urlWeather)
    const responseW = await responseWeather.json()
    renderWeather(responseW)
    const responseForecast = await fetch(urlForecast)
    const responseF = await responseForecast.json()
    renderForecast(responseF)
 }catch(e) {
   console.error(e)
 } finally {
   INPUT_LOCATION.form.reset()
  }
   const currentCity = cityName
   localStorage.setItem('currentCity', currentCity)

}

SEARCH_LOCATION.addEventListener('click', getForecast)



  function addCity() {
    const isNotValid = NOW.LOCATION.textContent === 'location' || Array.from(FAVORITES.ADDED_LOCATIONS).find(item => item.textContent === NOW.LOCATION.textContent);
    if (isNotValid) return
     
      FAVORITE_CITY_LIST.push(NOW.LOCATION.textContent)
      localStorage.setItem('storage', JSON.stringify(FAVORITE_CITY_LIST));
      createDiv.createdEl(FAVORITES.RIGHT_TEXT)
      document.querySelectorAll('.clear-img').forEach(item => item.addEventListener('click', deleteCity));
      document.querySelectorAll('.city').forEach(item => item.addEventListener('click', chooseFromFavorites));
     setDefaultStart ()
  }

  NOW.FAVORITE.addEventListener('click', addCity);

  function chooseFromFavorites() {
    INPUT_LOCATION.value = this.textContent;
    getForecast()
  }

  Array.from(FAVORITES.ADDED_LOCATIONS).find(item => item.addEventListener('click', chooseFromFavorites))
  
  function deleteCity() {
  this.parentElement.remove();
  let array = FAVORITE_CITY_LIST.filter(i => (i != (this.previousElementSibling.textContent)) ? i : false)
	localStorage.setItem('storage', JSON.stringify(array));
}

FAVORITES.REMOVE.forEach(item => item.addEventListener('click', deleteCity));  

