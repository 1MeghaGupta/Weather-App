import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useCityStore from '../store/cityStore';
import { fetchWeather } from '../api-call/weather';

const WeatherDisplay = () => {
  const { city } = useCityStore();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['weather', city],
    queryFn: () => fetchWeather(city),
    enabled: !!city,
  });

  if (!city) return <p>(Enter a city to get information on its weather.)</p>;
  if (isLoading) return <p>Loading the info...</p>;
  if (isError) return <p>Error: {error?.response?.data?.message || 'City not found'}</p>;

  return (
    <div>
       <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
        alt="weather icon"
      />
      <h2>{data.name}, {data.sys.country}</h2>
      <p>{data.weather[0].description}</p>
      <p>{Math.round(data.main.temp)}°C</p>
      </div>
  );
};

export default WeatherDisplay;
