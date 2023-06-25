
function searchWeather(){
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    

    // Make an API request to fetch weather data
    const apiKey = '8e682242511cd908d7b1736b515a76c1';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&apiKey='+apiKey+'&units=metrics';

    fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Parse the weather data and display it
            const temperature = data.main.temp;
            const pressure = data.main.pressure;
            const humidity = data.main.humidity;
            const clouds = data.clouds.all;
            const wind = data.wind.speed;
            const sunny = data.main.feels_like;

            weatherInfo.innerHTML = cityName.toUpperCase();

            document.getElementById('Temp').innerHTML = Math.round(temperature);
            document.getElementById('Pre').innerHTML = Math.round(pressure);
            document.getElementById('Hum').innerHTML = Math.round(humidity);
            document.getElementById('Clo').innerHTML = Math.round(clouds);
            document.getElementById('Win').innerHTML = Math.round(wind);
            document.getElementById('Sun').innerHTML = Math.round(sunny);
            
        })
        .catch(function(error) {
            // weatherInfo.innerHTML = 'error';
        });
}
