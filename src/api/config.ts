import axios from 'axios'

import { createCountry } from '../utils/createCountry'
import { Countries, Country } from '../types/countries'

const BASE_URL: string = 'https://restcountries.com/v3.1/'

const getAllCountries =
  BASE_URL + 'all?fields=name,capital,flags,population,region'

const getCountryByName = async (countryName: string) => {
  const { data } = await axios(BASE_URL + 'name/' + countryName)

  return createCountry(data[0])
}

const getNeighborsCountries = async (codes: string[]): Promise<Countries> => {
  const { data } = await axios(BASE_URL + 'alpha?codes=' + codes.join(','))

  return data.map((country: Country) => country.name.common).toSorted()
}

export { getAllCountries, getCountryByName, getNeighborsCountries }
