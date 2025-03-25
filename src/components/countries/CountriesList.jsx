import { useSelector } from 'react-redux'

import { CountriesItem } from './CountriesItem'
import styles from './Countries.module.css'
import { selectCountries } from '../../redux/slices/countriesSlice'

export const CountriesList = () => {
  const countries = useSelector(selectCountries)

  return (
    <>
      <section className={styles.countriesItems}>
        {countries.map((country) => (
          <CountriesItem key={country.id} {...country} />
        ))}
      </section>
    </>
  )
}
