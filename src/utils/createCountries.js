import { v4 as uuidv4 } from 'uuid'

const createCountries = (countries) =>
  countries.map((country) => {
    return {
      ...country,
      id: uuidv4(),
      population: new Intl.NumberFormat('ru-RU').format(country.population),
    }
  })

const createCountry = (country) => {
  return {
    ...country,
    id: uuidv4(),
    population: new Intl.NumberFormat('ru-RU').format(country.population),
  }
}

export { createCountries, createCountry }
