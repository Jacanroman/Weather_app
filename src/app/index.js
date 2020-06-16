require('./index.css');
const {UI} = require('./UI');
const {Weather} = require('./Weather');
const {Store} = require('./Store');

const store = new Store();
const {city, countryCode} = store.getLocationData();


const ui = new UI();
const weather = new Weather(city,countryCode)

async function fetchWeather(){
    const data = await weather.getWeather();
    console.log(data)
    ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click',(event)=>{
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    
    weather.changeLocation(city, countryCode);
    fetchWeather()
    event.preventDefault();//desactivar el reinicio del formulario
})

document.addEventListener('DOMContentLoaded',fetchWeather);