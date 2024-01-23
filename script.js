function refreshWeather(response){
  let temperatureElement = document.getElementById("temperature");
  let temperature = response.data.main.temp
  console.log(response.data)
  temperatureElement.innerHTML = Math.round(temperature);
  let cityElement = document.getElementById("weather-city");
  cityElement.innerHTML = response.data.name;

}
function searchCity(city){
let apiKey = "6029ec87a636d918ab92ca32f8d53f4b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);

}
function handleSearchSubmit(event){
event.preventDefault();
let searchInput = document.getElementById("search-form-input");

searchCity(searchInput.value);
}
let searchFormElement = document.getElementById("search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Ibadan")