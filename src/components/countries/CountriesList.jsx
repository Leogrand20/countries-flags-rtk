import { useSelector } from 'react-redux'

import { CountriesItem } from './CountriesItem'
import { selectCountries } from '../../redux/slices/countriesSlice'

import styles from './Countries.module.css'

export const CountriesList = ({ filteredCountries }) => {
  const countries = useSelector(selectCountries)

  return (
    <>
      <section className={styles.countriesItems}>
        {filteredCountries.map((country) => (
          <CountriesItem key={country.id} {...country} />
        ))}
      </section>
    </>
  )
}
