import React from 'react';
import Weather from './Weather'

const Countries = ({ countries, filter, handleFilterChange }) => {

    const filteredCountries = countries.filter(function (country) { return country.name.toUpperCase().includes(filter.toUpperCase()) })
    if (filteredCountries.length === 1) {
  
      const country = filteredCountries[0]
  
      return (
        <>
          <h1>{country.name}</h1>
          <p>capital {country.capital}
            <br />population {country.population}</p>
          <h2>languages</h2>
          <ul>
            {country.languages.map(language => <li key={language.iso639_2}>{language.name}</li>)}
          </ul>
          <br /><img src={country.flag} alt={"flag of " + country.name} id="flag"></img>
          <br /><Weather city={country.capital} />
        </>
      )
    } else if (filteredCountries.length < 11) {
      return (
        <>
          {filteredCountries.map(country => <p key={country.alpha3Code}>{country.name} <button value={country.name} onClick={handleFilterChange}>show</button></p>)}
        </>
      )
    } else {
      return (
        <>
          Too many matches, specify another filter
        </>
      )
    }
  }

  export default Countries