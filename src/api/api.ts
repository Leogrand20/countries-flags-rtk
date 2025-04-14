import axios from 'axios'

import { BASE_URL } from './config'
import { createCountries } from '../utils/createCountries'
import { createCountry } from '../utils/createCountry'

const getAllCountries = async () => {
  const { data } = await axios(
    BASE_URL + 'all?fields=name,capital,flags,population,region',
  )

  return createCountries(data)
}

const getCountryByName = async (countryName) => {
  const { data } = await axios(BASE_URL + 'name/' + countryName)

  return createCountry(data[0])
}

const getNeighborsCountries = async (codes) => {
  const { data } = await axios(BASE_URL + 'alpha?codes=' + codes.join(','))

  return data.map((country) => country.name.common).toSorted()
}

export { getAllCountries, getCountryByName, getNeighborsCountries }
