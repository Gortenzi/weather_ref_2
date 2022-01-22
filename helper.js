// export function createDiv() {
//     FAVORITES.RIGHT_TEXT.insertAdjacentHTML("beforeend",
//     `<div class="city-favorite">
//     <div class="city">${NOW.LOCATION.textContent}</div>
//     <img class="clear-img" src="img/x.png" alt="remove">
//   </div>`)
//    }

// constructor ?

// function CreateDiv() {
   
//     this.createdEl = function(nameOfClass) { 
//       this.nameOfClass = nameOfClass
//       this.nameOfClass.insertAdjacentHTML("beforeend",
//     `<div class="city-favorite">
//     <div class="city">${document.querySelector('.temp-location').textContent}</div>
//     <img class="clear-img" src="img/x.png" alt="remove">
//   </div>`)
//    }
//    }

function CreateDiv() {
   
  this.createdEl = function(nameOfClass, element) { 
    this.nameOfClass = nameOfClass
    this.nameOfClass.insertAdjacentHTML("beforeend",
  `<div class="city-favorite">
  <div class="city">${element}</div>
  <img class="clear-img" src="img/x.png" alt="remove">
</div>`)
 }
 }
  export   const createDiv = new CreateDiv()

  document.querySelector('.temp-location').textContent

   export   function setDefaultStart () {
    
    let nowLocationTextContent = document.querySelector('.temp-location')
    let nowTemperatureTextContent = document.querySelector('.temp-number')
    let nowWeatherIcon = document.querySelector('.weather-img')
     nowLocationTextContent.textContent = 'location',
    nowTemperatureTextContent.textContent = '0\xb0',
    nowWeatherIcon.textContent = ''
     
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