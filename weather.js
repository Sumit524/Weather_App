
const search_box = document.querySelector('.search_box input');
const Searchbtn = document.getElementById('Searchbtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temprature');
const description = document.querySelector('.discription');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('Wind_speed');
const weather_body = document.querySelector('.weather-body'); 
const weather_box = document.querySelector('.weather-box'); 
const not_found= document.querySelector('.not-found'); 
const notFound = document.querySelector('.not-found');
async function checkWeather(city) {
  const api_key = "0926703a63dc4dbda36bbaca2156c093";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;



 

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    


    }
    const weather_data = await response.json();
    console.log(weather_data);

    // Update weather information on the page
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = weather_data.weather[0].description;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed} Km/H`;

    const weatherCondition = weather_data.weather[0].main.toLowerCase();
    // Use the lowercase weather condition in the switch case
    switch (weatherCondition) {
      case 'clouds':
        weather_img.src = "cloud4.png";
        break;
      case 'clear':
        weather_img.src = "sun2.png";
        break;
      case 'mist':
        weather_img.src = "cloud_sun.png";
        break;

        case 'drizzle':
        weather_img.src = "Drizzle2.png";
        break;
      case 'rain':
        weather_img.src = "rain2.png";
        break;
      case 'haze':
        weather_img.src = "Haze2.png";
        break;
      // Add more cases for other weather conditions if needed
      default:
        // Set a default image if the weather condition is not matched
        weather_img.src = "default.png";
        break;
    }
    
    // notFound.style.display = 'none';
    // Hide the "Not Found" image since data is found


    weather_body.style.display = 'block';
    notFound.style.display = 'none';
     

  }
   catch (error) {
    console.error('Error fetching weather data:', error);
    // Show the "Not Found" image when an error occurs
    notFound.style.display = 'block';
    weather_body.style.display = 'none';
    // weather_details.style.display = 'none';
    temperature.classList.add('not-found-style');
   
    
    // Reset other elements


    temperature.innerHTML = '0°C';
    description.innerHTML = 'N/A';
    humidity.innerHTML = 'N/A';
    wind_speed.innerHTML = 'N/A';
    weather_img.src = 'default.png';
  }
}
window.onload = function() {
  search_box.value = ''; // Clear the input field value
};

Searchbtn.addEventListener('click', () => {
  const city = search_box.value;
  if (city.trim() !== "") {
    checkWeather(city);
  } else {
    console.log("Please enter a city name.");
  }
});





function refreshPage() {
  window.location.reload();
}




























