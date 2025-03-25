import { useNavigate } from 'react-router'
import styles from './Countries.module.css'

export const CountriesItem = ({ flags, capital, name, population, region }) => {
  const countryName = name.common.toLowerCase().split(' ').join('?')
  const navigate = useNavigate()

  return (
    <article
      className={styles.countriesItem}
      onClick={() => navigate(`/country/${countryName}`, { relative: 'path' })}
    >
      <img
        className={styles.countriesItemImg}
        src={flags.png}
        alt={flags.alt}
      />

      <div className={styles.countriesItemBody}>
        <h3 className={styles.countriesBodyTitle}>{name.common}</h3>
        <div className={styles.countriesBodyText}>
          <p>
            <span className={styles.countriesBodySpan}>Population:</span>{' '}
            {new Intl.NumberFormat('ru-RU').format(population)}
          </p>
          <p>
            <span className={styles.countriesBodySpan}>Region:</span> {region}
          </p>
          <p>
            <span className={styles.countriesBodySpan}>Capital:</span>{' '}
            {capital[0]}
          </p>
        </div>
      </div>
    </article>
  )
}
