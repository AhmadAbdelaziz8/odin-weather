import "./style.css";

// Function to generate the URL for the weather API request
function generateURL(location) {
  const API_KEY = "1986480656ec490d950204923202611";
  return `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}`;
}

// DOM elements
const input = document.querySelector("#search-city");
const submitBtn = document.querySelector("#submit-btn");
const cityName = document.querySelector("#city-name");
const cityTemp = document.querySelector("#temp");
const weatherCondition = document.querySelector("#weather-condition");
const weatherDetails = document.querySelectorAll(".item-value");
const [feelsLike, windDegree, humidity, uv, moon, sunRise] = weatherDetails;

// Function to fetch weather data for a given location
async function fetchWeatherData(location) {
  try {
    const response = await fetch(generateURL(location), { mode: "cors" });

    if (!response.ok) {
      throw new Error(`Failed to fetch weather data: ${response.statusText}`);
    }

    const data = await response.json();
    updateWeatherInfo(data);
  } catch (error) {
    handleError(error);
  }
}

// Function to update the UI with the fetched weather data
function updateWeatherInfo(data) {
  console.log(data); // For debugging

  const { location, current, forecast } = data;
  const { name, country } = location;
  const {
    temp_c,
    condition,
    feelslike_c,
    wind_degree,
    humidity: humidityValue,
    uv,
  } = current;
  const { moon_phase, sunrise } = forecast.forecastday[0].astro;

  // Update city and weather details in the UI
  cityName.textContent = `${name}, ${country}`;
  cityTemp.textContent = `${temp_c}°C`;
  weatherCondition.textContent = condition.text;

  updateWeatherDetails(
    feelslike_c,
    wind_degree,
    humidityValue,
    uv,
    moon_phase,
    sunrise
  );
}

// Function to update weather details like feels-like, wind, humidity, etc.
function updateWeatherDetails(
  feelsLikeResponse,
  windDegreeResponse,
  humidityResponse,
  uvResponse,
  moonResponse,
  sunriseResponse
) {
  feelsLike.textContent = `${feelsLikeResponse}°C`;
  windDegree.textContent = windDegreeResponse;
  humidity.textContent = `${humidityResponse}%`;
  uv.textContent = uvResponse;
  moon.textContent = moonResponse;
  sunRise.textContent = sunriseResponse;
}

// Function to handle errors in API calls
function handleError(error) {
  alert(`Error fetching weather data: ${error.message}`);
}

// Event listener for the submit button to trigger fetching weather data
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const location = input.value.trim();

  if (location) {
    fetchWeatherData(location);
  } else {
    alert("Location input is empty!");
  }
});
