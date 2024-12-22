import "./style.css";

// Function to generate the URL for the weather API request
function generateURL(location) {
  const API_KEY = "1986480656ec490d950204923202611";
  return `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=5`;
}

// DOM elements
const input = document.querySelector("#search-city");
const submitBtn = document.querySelector("#submit-btn");
const cityName = document.querySelector("#city-name");
const cityTemp = document.querySelector("#temp");
const weatherCondition = document.querySelector("#weather-condition");
const weatherDetails = document.querySelectorAll(".item-value");
const [feelsLike, windDegree, humidity, uv, moon, sunRise] = weatherDetails;

// Global variable to store next five days data
let nextFiveDays = [];

// Function to fetch weather data for a given location
async function fetchWeatherData(location) {
  try {
    const response = await fetch(generateURL(location), { mode: "cors" });
    if (!response.ok) {
      throw new Error(`Failed to fetch weather data: ${response.statusText}`);
    }

    const data = await response.json();
    updateWeatherInfo(data);
    processNextFiveDays(data);

    // Draw the updated chart
    drawChart();
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

// Function to process the next 5 days' data and store it in a global array
function processNextFiveDays(data) {
  nextFiveDays = data.forecast.forecastday.map((day) => ({
    date: day.date,
    maxTemp: day.day.maxtemp_c,
    minTemp: day.day.mintemp_c,
  }));
  console.log(nextFiveDays);
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

// Draw a chart of the 5-day temperature in the graph section
// Load Google Charts
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

// Function to draw the chart
function drawChart() {
  if (nextFiveDays.length === 0) {
    console.error("No data available to draw the chart!");
    return;
  }

  // Prepare data dynamically from the nextFiveDays array
  const chartData = [["Date", "Max Temp (°C)", "Min Temp (°C)"]];
  nextFiveDays.forEach((day) => {
    chartData.push([day.date, day.maxTemp, day.minTemp]);
  });

  // Convert the data to Google Charts format
  const data = google.visualization.arrayToDataTable(chartData);

  // Set chart options
  const options = {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    chartArea: {
      left: "10%",
      right: "5%",
      top: "15%",
      bottom: "10%",
      width: "85%",
      height: "75%",
    },
    title: {
      textStyle: {
        color: "#f97316", // Orange color
        fontSize: 16,
      },
    },
    legend: {
      textStyle: { color: "#ffffff" },
      position: "top",
    },
    hAxis: {
      textStyle: { color: "#ffffff" },
      gridlines: { color: "#444444" },
      baselineColor: "#666666",
    },
    vAxis: {
      textStyle: { color: "#ffffff" },
      gridlines: { color: "#444444" },
      baselineColor: "#666666",
    },
    series: {
      0: { color: "#4ade80" },
      1: { color: "#22c55e" },
    },
    lineWidth: 3,
    pointSize: 5,
    animation: {
      duration: 1000,
      easing: "out",
    },
  };

  // Create and draw the chart
  const chart = new google.visualization.LineChart(
    document.getElementById("curve_chart")
  );
  chart.draw(data, options);

  // Responsive resize
  window.addEventListener("resize", () => {
    chart.draw(data, options);
  });
}
