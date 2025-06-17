import React from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import './index.css';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Simple Weather Application</h1>
      <SearchBar />
      <WeatherDisplay />
    </div>
  );
}

export default App;
