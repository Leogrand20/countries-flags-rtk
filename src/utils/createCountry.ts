import { v4 as uuidv4 } from 'uuid'

import { Country } from '../types/countries'

export const createCountry = (country: Country) => {
  return {
    ...country,
    id: uuidv4(),
    population: new Intl.NumberFormat('ru-RU').format(country.population),
  }
}
