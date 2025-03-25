import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Search } from '../components/search/Search'
import { Preloader } from '../components/preloader/Preloader'
import { CountriesList } from '../components/countries/CountriesList'

import {
  fetchCountries,
  selectCountries,
  selectIsLoading,
} from '../redux/slices/countriesSlice'

export const Home = () => {
  const countries = useSelector(selectCountries)
  const [filteredCountries, setFilteredCountries] = useState(countries)
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)

  useEffect(() => {
    if (!countries.length) {
      dispatch(fetchCountries())
    }
  }, [])

  const handleSearch = (search, region, sortMode) => {
    let data = [...countries]

    if (search) {
      data = data.filter((item) => RegExp(search, 'i').test(item.name.common))
    }

    if (region) {
      data = data.filter((item) => item.region.includes(region))
    }

    if (sortMode) {
      data = data.toSorted((a, b) => {
        if (sortMode === 'asc' && a.name.common > b.name.common) return 1
        else if (sortMode === 'asc') return -1
        else if (sortMode === 'desc' && a.name.common < b.name.common) return 1
        else return -1
      })
    }

    setFilteredCountries(data)
  }

  useEffect(() => {
    handleSearch()
  }, [countries])

  return (
    <>
      <Search onSearch={handleSearch} />

      {isLoading ? (
        <Preloader />
      ) : (
        <CountriesList countries={filteredCountries} />
      )}
    </>
  )
}
