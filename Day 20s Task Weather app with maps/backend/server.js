// backend/server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 5000;

// ⚠️ replace with your own OpenWeatherMap API key
const API_KEY = "YOUR_API_KEY_HERE";

app.use(cors());

app.get("/weather", async (req, res) => {
  const { lat, lon, units = "metric" } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: "Missing lat/lon" });
  }

  try {
    // Current weather
    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`
    );
    const weather = await weatherRes.json();

    // Forecast
    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`
    );
    const forecast = await forecastRes.json();

    // Debug logs in terminal
    console.log("Weather API response:", weather);
    console.log("Forecast API response:", forecast);

    // ✅ Validate data before sending
    if (weather.cod !== 200 || forecast.cod !== "200") {
      return res.status(500).json({
        error: "Invalid data from OpenWeather",
        weather,
        forecast,
      });
    }

    res.json({ weather, forecast });
  } catch (err) {
    console.error("Server error:", err.message);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
