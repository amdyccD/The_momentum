function onGeoOk (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const APIKEY = "44ec1d3af49717468468d6c4a7fc8b37";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weathers = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child");
        weathers.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
        city.innerText = data.name;
    });
}

function oneGeoError() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, oneGeoError);