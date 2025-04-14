import axios from 'axios'

import { BASE_URL } from './config'
import { createCountries } from '../utils/createCountries'
import { createCountry } from '../utils/createCountry'
import { Countries, Country } from '../types/countries'

const getAllCountries = async (): Promise<Countries> => {
  const { data } = await axios(
    BASE_URL + 'all?fields=name,capital,flags,population,region',
  )

  return createCountries(data)
}

const getCountryByName = async (countryName: string): Promise<Country> => {
  const { data } = await axios(BASE_URL + 'name/' + countryName)

  return createCountry(data[0])
}

const getNeighborsCountries = async (codes: string[]): Promise<Countries> => {
  const { data } = await axios(BASE_URL + 'alpha?codes=' + codes.join(','))

  return data.map((country: Country) => country.name.common).toSorted()
}

export { getAllCountries, getCountryByName, getNeighborsCountries }
