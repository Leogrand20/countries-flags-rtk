import axios from 'axios'
import { BASE_URL } from './config'

const getCountryByName = async (countryName) => {
  const { data } = await axios(BASE_URL + 'name/' + countryName)

  return data
}

const getCountriesByCode = async (codes) => {
  const { data } = await axios(BASE_URL + 'alpha?codes=' + codes.join(','))

  return data
}

export { getCountryByName, getCountriesByCode }
