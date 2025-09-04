let map, marker;
let currentCoords = null;
const weatherEl = document.getElementById("weather");
const unitsEl = document.getElementById("units");

function initMap() {
  map = L.map("map").setView([20, 78], 5);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  map.on("click", (e) => {
    setMarker(e.latlng);
    fetchWeather(e.latlng.lat, e.latlng.lng);
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setMarker(coords);
        map.setView(coords, 10);
        fetchWeather(coords.lat, coords.lng);
      },
      () => console.warn("Geolocation denied")
    );
  }
}

function setMarker(coords) {
  if (marker) marker.setLatLng(coords);
  else marker = L.marker(coords).addTo(map);
  currentCoords = coords;
}

async function fetchWeather(lat, lon) {
  const units = unitsEl.value;
  weatherEl.innerHTML = "<p>Loading weather...</p>";
  try {
    const res = await fetch(`http://localhost:5000/weather?lat=${lat}&lon=${lon}&units=${units}`);
    const data = await res.json();
    renderWeather(data, units);
  } catch (err) {
    weatherEl.innerHTML = `<p class='text-red-600'>Error: ${err.message}</p>`;
  }
}

function renderWeather(data, units) {
  if (!data.weather || !data.forecast || !data.forecast.list) {
    weatherEl.innerHTML = "<p class='text-red-600'>No weather data available.</p>";
    return;
  }

  const w = data.weather;
  const f = data.forecast;
  const city = w.name || "Selected Location";
  const tempUnit = units === "metric" ? "°C" : "°F";
  const forecasts = f && f.list ? f.list.slice(0, 5) : [];

  weatherEl.innerHTML = `
    <h2 class="text-xl font-medium">${city}</h2>
    <div class="mt-2 flex items-center gap-4">
      <img src="https://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png" class="w-20 h-20" alt="${w.weather[0].description}" />
      <div>
        <div class="text-3xl font-semibold">${Math.round(w.main.temp)} ${tempUnit}</div>
        <div class="text-sm text-slate-600">${w.weather[0].description}</div>
      </div>
    </div>

    <div class="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-700">
      <div>Feels: ${Math.round(w.main.feels_like)} ${tempUnit}</div>
      <div>Humidity: ${w.main.humidity}%</div>
      <div>Wind: ${w.wind.speed} m/s</div>
      <div>Pressure: ${w.main.pressure} hPa</div>
    </div>

    <div class="mt-4">
      <h3 class="font-medium">Short Forecast</h3>
      <ul class="mt-2">
        ${forecasts
          .map(
            (fItem) => `
          <li class="text-sm py-1 border-b flex justify-between">
            <span>${new Date(fItem.dt * 1000).toLocaleString()}</span>
            <span>${Math.round(fItem.main.temp)} ${tempUnit}</span>
          </li>`
          )
          .join("")}
      </ul>
    </div>
  `;
}

unitsEl.addEventListener("change", () => {
  if (currentCoords) fetchWeather(currentCoords.lat, currentCoords.lng);
});

initMap();
