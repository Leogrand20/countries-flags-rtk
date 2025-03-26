import { CountriesItem } from './CountriesItem'

import styles from './Countries.module.css'

export const CountriesList = ({ filteredCountries }) => {
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
