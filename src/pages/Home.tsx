import { type FC, useCallback, useEffect, useState } from 'react'

import { type Region } from '@shared/types/regions'
import { CountriesList } from '@components/countries/CountriesList'
import { Preloader } from '@components/preloader/Preloader'
import { Search } from '@components/search/Search'
import { selectCountries } from '@store/selectors/countries-selectors'
import { selectIsLoading } from '@store/selectors/country-selectors'
import { selectRegionFilter, selectSearchFilter, selectSortModeFilter } from '@store/selectors/filter-selectors'
import { fetchCountries } from '@store/slices/countriesSlice'
import { useAppDispatch, useAppSelector } from '@store/store'

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
  }, [countries.length, dispatch])

  const handleSearch = useCallback(
    (search: string, region: Region | '', sortMode: string | null) => {
      let data = [...countries]

      if (search) {
        data = data.filter(
          (country) =>
            country.name && RegExp(search, 'i').test(country.name.common),
        )
      }

      if (region) {
        data = data.filter((country) => country.region?.includes(region))
      }

      if (sortMode) {
        data = data.toSorted((a, b) => {
          if (a.name && b.name && sortMode === 'asc' && a.name.common >
            b.name.common) return 1
          else if (sortMode === 'asc') return -1
          else if (a.name && b.name && sortMode === 'desc' && a.name.common <
            b.name.common) return 1
          else return -1
        })
      }

      setFilteredCountries(data)
    },
    [countries],
  )

  useEffect(() => {
    handleSearch(search, region, sortMode)
  }, [countries, handleSearch, region, search, sortMode])

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
