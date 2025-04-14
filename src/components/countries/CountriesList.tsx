import { CountriesItem } from './CountriesItem'

import styles from './Countries.module.css'

export const CountriesList = ({ countries }) => {
  return (
    <>
      <section className={styles.countriesItems}>
        {countries.map((country, id) => (
          <CountriesItem key={id} {...country} />
        ))}
      </section>
    </>
  )
}
