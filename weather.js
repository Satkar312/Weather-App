const apiKey = "3d87137cfefd7c585488f1b49cf2a462";
const searchForm = document.querySelector("form");
const searchInput = document.querySelector('#Search');
const locationElements = document.querySelector('#location');
const dateElements = document.querySelector('#date');
const conditionElements= document.querySelector('#condition');
const tempElements = document.querySelector('#temperature');
const rainfallElements = document.querySelector('#rainfall');
const windElements = document.querySelector('#wind');
const humidityElements = document.querySelector('#humidity');

function fetchWeatherData(location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3d87137cfefd7c585488f1b49cf2a462&units=metric`;   

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        locationElements.textContent = data.name;
        dateElements.textContent = new Date().toLocaleDateString();
        conditionElements.textContent = data.weather[0].description;
        tempElements.textContent = `Temperature: ${data.main.temp}°C`;
        rainfallElements.textContent = `Rain: ${data.rain ? data.rain['1h'] : 0}mm`;
        windElements.textContent = `Wind: ${data.wind.speed} m/s`;
        humidityElements.textContent = `Humidity: ${data.main.humidity}%`;

        const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        const weatherIcon = document.querySelector('#weather-icon-img');
        weatherIcon.src = iconSrc;
    })
    .catch(error => {
        console.log(error);
        alert('Could not fetch weather data');
    })
}
    fetchWeatherData('Peterborough');

    searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = searchInput.value;
    fetchWeatherData(location);
});
