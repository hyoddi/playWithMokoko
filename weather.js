// openweatherapi
const apiKey = '7736aee0e875b67193f98ee21dd52e1b'; 
const city = 'Ansan, KR'; // 우리집
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kr`; // 한글로 받아보자


weatherNow = document.getElementById("weather-now");
temperature = document.getElementById("temperature");

fetch(url)
  .then(response => response.json())
  .then(data => {
    weatherNow.innerText = data.weather[0].description; // 날씨 상태
    temperature.innerText = Math.floor(data.main.temp) + '°C'; // 온도 (소수점 버림)
  })
  .catch(error => console.error('Error fetching weather data:', error));