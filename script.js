const inputBox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temp');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-notfound');
const weather_body = document.querySelector('.weather-body');


async function checkweather(city) {
    const api_key = "8ad1477085a175d7579f2d27b737aa5a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display= "none";
        console.log("Error");
        return;
    }
    weather_body.style.display= "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed} Km/H.`;


    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "OIP-removebg-preview.png";
            break;
        case 'Clear':
            weather_img.src = "download-removebg-preview.png";
            break;
        case 'Rain':
            weather_img.src = "OIP__1_-removebg-preview.png";
            break;
        case 'Haze':
            weather_img.src = "th__2_-removebg-preview.png";
            break;
        case 'Snow':
            weather_img.src = "th__3_-removebg-preview.png";
            break;
        case 'Mist':
            weather_img.src = "th__2_-removebg-preview.png";
            break;
    }
    console.log(weather_data);
}

searchbtn.addEventListener('click', () => {
    checkweather(inputBox.value);
}); 