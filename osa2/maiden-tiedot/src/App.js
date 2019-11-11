import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Countries from './components/Countries';
import Filter from './components/Filter';

function App() {

  const [filter, setFilter] = useState('')
  const [notes, setNotes] = useState([])

  useEffect(() => {

    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setNotes(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Countries countries={notes} filter={filter} handleFilterChange={handleFilterChange} />
    </div>
  );
}

export default App;
