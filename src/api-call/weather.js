import axios from 'axios';

export const fetchWeather = async (city) => {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  return response.data;
};
