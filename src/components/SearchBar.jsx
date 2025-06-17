import React, { useState } from 'react';
import useCityStore from '../store/cityStore';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const { setCity } = useCityStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setCity(input.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
