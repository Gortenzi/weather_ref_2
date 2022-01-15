export const URLS = {
    SERVER: 'https://api.openweathermap.org/data/2.5/weather',
    SERVER_ICON : 'https://openweathermap.org/img/wn/',
    SERVER_FORECAST: 'https://api.openweathermap.org/data/2.5/forecast',
    API_KEY: '4a68b87e270abf83558362ff6a1ee824',
    
}
export const NOW = {
    LOCATION: document.querySelector('.temp-location'),
    TEMPERATURE: document.querySelector('.temp-number'),
    WEATHER_ICON: document.querySelector('.weather-img'),
    FAVORITE: document.querySelector('.temp-location'),

}

export const DETAILS = {
    LOCATION: document.querySelector('.details-loc'),
    TEMP: document.querySelector('.details-temp'),
    FEELS_LIKE: document.querySelector('.details-feels__like'),
    WEATHER: document.querySelector('.details-weather'),
    SUNRISE: document.querySelector('.details-sunrise'),
    SUNSET: document.querySelector('.details-sunset'),
}

export const FORECAST = {
      LOCATION: document.querySelector('.info-left__forecast-text'),
      DATE: document.querySelector('.item-date'),

}
export const FAVORITES = {
  RIGHT_TEXT: document.querySelector('.right-text'),
	LIST: document.querySelector('.city-favorite'),
	ADDED_LOCATIONS: document.getElementsByClassName('city'),
	REMOVE: document.querySelectorAll('.clear-img'),
}

export const btns = document.querySelectorAll('.info-link__a')

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
    clearActiveClasses()
    btn.classList.add('active')
    })

  })  

    function clearActiveClasses() {
    btns.forEach(btn => {
    btn.classList.remove('active')
    })
  }

  export function createDiv() {
    return FAVORITES.RIGHT_TEXT.insertAdjacentHTML("beforeend",`<div class="city-favorite">
    <div class="city">${NOW.LOCATION.textContent}</div>
    <img class="clear-img" src="img/x.png" alt="remove">
  </div>`)
   }
  
   export   function setDefaultStart () {
    return ( NOW.LOCATION.textContent = 'location',
     NOW.TEMPERATURE.textContent = '0\xb0',
     NOW.WEATHER_ICON.src = '')
   }

  export function convertTime(unixTime) {
	let date = new Date(unixTime * 1000);
	let hours = date.getHours();
	let minutes = "0" + date.getMinutes();
	return hours + ':' + minutes.slice(-2);
}
 const delay = (ms) => {
    return new Promise(r => setTimeout(() => r(), ms))};

   
    export function convertForecastTime(time) {
      let date = new Date(time);
      let hours = date.getHours();
      let minutes = "0" + date.getMinutes();
      return hours + ':' + minutes;
    }
    
export function convertForecastDay(time) {
      let date = new Date(time);
      return date.getDate() + ' ' + date.toLocaleString('en-US', { month: 'long' })
    }
    