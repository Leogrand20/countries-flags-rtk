import { v4 as uuidv4 } from 'uuid'

export const createCountry = (countries) =>
  countries.map((country) => {
    return {
      ...country,
      id: uuidv4(),
      population: new Intl.NumberFormat('ru-RU').format(country.population),
    }
  })
