import { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from './components/Loader/Loader'
import Cards from './components/Cards'
import DataTitle from './components/DataTitle'
import CountrySelect from './components/CountrySelect'

const themeLight = {
  id: 'light',
  background: '#fff',
  color: '#000'
}

const themeDark = {
  id: 'dark',
  background: '#111827',
  color: '#fff'
}

const StyledWrapper = styled.div`
  min-height: 100vh;
  background-color: ${p => p.theme.background};
  color: ${p => p.theme.color};
  transition: background-color 0.35s, color 0.35s;
`

function App() {
  const [theme, setTheme] = useState(themeDark)
  const [stats, setStats] = useState({})
  const [countries, setCountries] = useState(false)
  const [title, setTitle] = useState('Global')
  const [dataDate, setDataDate] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const setInitialData = async () => {
      const data = await fetchCovidData()

      setStats(data.Global)
      setCountries(data.Countries)
      setDataDate(data.Date)
      setTimeout(() => setLoading(false), 1000)
    }

    setInitialData()
  }, [])

  const fetchCovidData = async () => {
    const { data } = await axios.get('https://api.covid19api.com/summary')

    return data
  }

  const onCountryChange = country => {
    setTitle(country.Country)
    setStats(country)
  }

  const onClearCountry = async () => {
    setLoading(true)
    const data = await fetchCovidData()
    setStats(data.Global)
    setTitle('Global')
    setLoading(false)
  }

  const onThemeToggle = () => {
    setTheme(theme.id === 'light' ? themeDark : themeLight)
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header onThemeToggle={onThemeToggle} theme={theme} />
            <main className="mt-10 mb-5 md:mb-14">
              <DataTitle theme={theme} title={title} dataDate={dataDate} />
              <Cards data={stats} />
              <CountrySelect
                countries={countries}
                onCountryChange={onCountryChange}
                onClearCountry={onClearCountry}
              />
            </main>
            <Footer />
          </>
        )}
      </StyledWrapper>
    </ThemeProvider>
  )
}

export default App
