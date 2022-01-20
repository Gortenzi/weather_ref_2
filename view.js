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

// destructuring obj NOW
// const{LOCATION, TEMPERATURE, WEATHER_ICON, FAVORITE} = NOW


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

