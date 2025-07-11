import apiKey from "./data.js"

const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humid = document.querySelector(".humid");
const cloud = document.querySelector(".cloud");

document.getElementById('textarea').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        var cityName = event.target.value;
        getWeather(cityName);
    }
});
const button = document.querySelector(".pixel-grid");

button.addEventListener('click', () => {
    const cityName = document.querySelector(".txtarea").value;
    getWeather(cityName);
});

async function getWeather(cityName) {
    if (!cityName.trim()) {
        alert('Please enter a city name :(');
        city.textContent = 'Please enter a city name :(';
        return;
    }
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
    const data = await response.json();
    console.log(data);
    updateUI(data);

}

function updateUI(data) {
    city.textContent = data.name;
    temp.textContent = "Temp: " + Math.round(data.main.temp) + "°C";
    humid.textContent = "humidity: " + Math.round(data.main.humidity);
    cloud.textContent = "Sky: " + data.weather[0].description;
}