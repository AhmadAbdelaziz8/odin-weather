import "./style.css";

function generateURL(location) {
  return `http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${location}`;
}

const input = document.querySelector("#search-city");
const submitBtn = document.querySelector("#submit-btn");
// variable will be changed
const cityName = document.querySelector("#city-name");
const cityTemp = document.querySelector("#temp");
const weatherCondition = document.querySelector("#weather-condition");
const weatherDetails = document.querySelectorAll(".item-value");
const weatherDetailsArray = [...weatherDetails];
const [feelsLike, windDegree, humidity, uv, moon, pressure] = weatherDetails;
// console.log(weatherDetailsArray);

async function getCity(location) {
  try {
    const response = await fetch(generateURL(location), { mode: "cors" });

    if (!response.ok) {
      throw new Error(`Failed to fetch weather data: ${response.statusText}`);
    }

    const responseMap = await response.json(); // Await the parsed JSON
    insertData(responseMap);
  } catch (error) {
    alert("Error fetching weather data:", error);
  }
}

function insertData(data) {
  console.log(data); // For debugging
  cityName.textContent = `${data.location.name}, ${data.location.country}`; // Update city name
  cityTemp.textContent = `${data.current.temp_c}°C`; // Update temperature in Celsius
  weatherCondition.textContent = data.current.condition.text; // Update weather condition
  processWeatherDetails(
    data.current.feelslike_c,
    data.current.wind_degree,
    data.current.humidity,
    data.current.uv,
    data.forecast.forecastday[0].astro.moon_phase,
    data.current.feelslike_c
  );
}

function processWeatherDetails(
  feelsLikeResponse,
  windDegreeResponse,
  humidityResponse,
  uvResponse,
  moonResponse,
  pressureResponse
) {
  feelsLike.textContent = `${feelsLikeResponse}°C`;
  windDegree.textContent = windDegreeResponse;
  humidity.textContent = humidityResponse;
  uv.textContent = uvResponse;
  moon.textContent = moonResponse;
  pressure.textContent = pressureResponse;
}

// Event listener for the button
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const location = input.value.trim();
  if (location) {
    getCity(location);
  } else {
    console.warn("Location input is empty!");
  }
});
