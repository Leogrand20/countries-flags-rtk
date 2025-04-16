import { FC, useEffect, useState } from 'react'

import { Search } from '../components/search/Search'
import { Preloader } from '../components/preloader/Preloader'
import { CountriesList } from '../components/countries/CountriesList'

import { fetchCountries } from '../redux/slices/countriesSlice'

import {
  selectRegionFilter,
  selectSearchFilter,
  selectSortModeFilter,
} from '../redux/selectors/filter-selectors'

import { useAppDispatch, useAppSelector } from '../redux/store'
import {
  selectCountries,
  selectIsLoading,
} from '../redux/selectors/countries-selectors'
import { Region } from '../types/regions'

export const Home: FC = () => {
  const dispatch = useAppDispatch()
  const countries = useAppSelector(selectCountries)
  const [filteredCountries, setFilteredCountries] = useState(countries)
  const isLoading = useAppSelector(selectIsLoading)
  const search = useAppSelector(selectSearchFilter)
  const region = useAppSelector(selectRegionFilter)
  const sortMode = useAppSelector(selectSortModeFilter)

  useEffect(() => {
    if (!countries.length) {
      dispatch(fetchCountries())
    }
  }, [])

  const handleSearch = (
    search: string,
    region: Region | '',
    sortMode: string | null
  ) => {
    let data = [...countries]

    if (search) {
      data = data.filter(
        (country) =>
          country.name && RegExp(search, 'i').test(country.name.common)
      )
    }

    if (region) {
      data = data.filter((country) => country.region?.includes(region))
    }

    if (sortMode) {
      data = data.toSorted((a, b) => {
        if (
          a.name &&
          b.name &&
          sortMode === 'asc' &&
          a.name.common > b.name.common
        )
          return 1
        else if (sortMode === 'asc') return -1
        else if (
          a.name &&
          b.name &&
          sortMode === 'desc' &&
          a.name.common < b.name.common
        )
          return 1
        else return -1
      })
    }

    setFilteredCountries(data)
  }

  useEffect(() => {
    handleSearch(search, region, sortMode)
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
