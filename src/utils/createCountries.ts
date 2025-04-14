import { v4 as uuidv4 } from 'uuid'
import { Countries, Country } from '../types/countries'

export const createCountries = (countries: Countries) =>
  countries.map((country: Country) => {
    return {
      ...country,
      id: uuidv4(),
      population: new Intl.NumberFormat('ru-RU').format(country.population),
    }
  })
