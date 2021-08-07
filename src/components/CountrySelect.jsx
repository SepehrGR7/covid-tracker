import { useState } from 'react'

const CountrySelect = ({ countries, onCountryChange, onClearCountry }) => {
  const [selectedCountry, setSelectedCountry] = useState('')

  const onSelectChange = e => {
    // Find the country in the list of countries
    if (e.target.value === '0') {
      return
    } else {
      const country = countries.find(c => c.CountryCode === e.target.value)

      setSelectedCountry(e.target.value)
      onCountryChange(country)
    }
  }

  return (
    <div className="container flex flex-col items-center w-full mx-auto mt-5">
      <select
        onChange={onSelectChange}
        className="w-2/3 px-4 py-2 bg-transparent border-2 rounded-full dark:text-white md:w-1/2 focus:ring-purple-500 focus:outline-none focus:ring"
      >
        <option value="0" className="dark:text-white">
          Select a country
        </option>
        {countries.map(country => (
          <option key={country.ID} value={country.CountryCode}>
            {country.Country}
          </option>
        ))}
      </select>
      {selectedCountry && (
        <button
          onClick={onClearCountry}
          className="block px-4 py-2 mx-auto mt-6 text-white bg-purple-500 rounded-full hover:bg-purple-600 focus:ring focus:ring-purple-600"
        >
          Clear Country
        </button>
      )}
    </div>
  )
}

export default CountrySelect
