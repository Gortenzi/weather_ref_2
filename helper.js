export function createDiv() {
    FAVORITES.RIGHT_TEXT.insertAdjacentHTML("beforeend",`<div class="city-favorite">
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