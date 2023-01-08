const API_KEY = "c8ba13ad7601d6c222ce226fd2080999";

const onGeoOk = async (position) => {
  const {
    coords: { latitude, longitude },
  } = position;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather p:first-child");
      const city = document.querySelector("#weather p:last-child");
      weather.innerHTML = `${data.weather[0].main} • ${data.main.temp}°`;
      city.innerHTML = data.name;
    });
};
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
