import axios from 'axios'
import { BASE_URL } from './config'

const getCountriesByCode = async (codes) => {
  const { data } = await axios(BASE_URL + 'alpha?codes=' + codes.join(','))

  return data
}

export { getCountriesByCode }
