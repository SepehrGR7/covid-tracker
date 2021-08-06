import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from './components/Loader/Loader'
import Cards from './components/Cards'
import DataTitle from './components/DataTitle'
import CountrySelect from './components/CountrySelect'

function App() {
  const [stats, setStats] = useState({})
  const [countries, setCountries] = useState(false)
  const [title, setTitle] = useState('Global')
  const [dataDate, setDataDate] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const setData = async () => {
      const data = await fetchCovidData()

      setStats(data.Global)
      setCountries(data.Countries)
      setDataDate(data.Date)
      setTimeout(() => setLoading(false), 1000)
    }

    setData()
    // eslint-disable-next-line
  }, [])

  const fetchCovidData = async () => {
    const { data } = await axios.get('https://api.covid19api.com/summary')

    return data
  }

  const onCountryChange = country => {
    setTitle(country.Country)
    setStats(country)
  }

  const clearCountry = async () => {
    setLoading(true)
    const data = await fetchCovidData()
    setStats(data.Global)
    setTitle('Global')
    setLoading(false)
  }

  return (
    <div className="min-h-screen dark:bg-gray-900">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main className="mt-10 mb-5 md:mb-14">
            <DataTitle title={title} dataDate={dataDate} />
            <Cards data={stats} />
            <CountrySelect
              countries={countries}
              onCountryChange={onCountryChange}
              onClearCountry={clearCountry}
            />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
