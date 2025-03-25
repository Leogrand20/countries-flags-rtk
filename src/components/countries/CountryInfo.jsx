import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import { selectCountry } from '../../redux/slices/currentCountrySlice'
import {
  fetchNeighbors,
  selectNeighbors,
} from '../../redux/slices/neighborsSlice'

import styles from './Countries.module.css'

export const CountryInfo = () => {
  const country = useSelector(selectCountry)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const neighbors = useSelector(selectNeighbors)

  const {
    name,
    flags,
    capital,
    population,
    region,
    subregion,
    tld = [],
    currencies = {},
    languages = {},
    borders = [],
  } = country

  useEffect(() => {
    if (borders.length) {
      dispatch(fetchNeighbors(borders))
    }
  }, [borders])

  return (
    <section className={styles.countryInfo}>
      <img
        className={styles.countryInfoImg}
        src={flags?.png}
        alt={flags?.alt}
      />

      <div className="info">
        <h1 className={styles.countryInfoTitle}>{name?.common}</h1>

        <div className={styles.countryInfoData}>
          <ul className={styles.countryDataList}>
            <li className={styles.countryDataListItem}>
              <strong>Native Name:</strong> {name?.official}
            </li>
            <li className={styles.countryDataListItem}>
              <strong>Population</strong>{' '}
              {new Intl.NumberFormat('ru-RU').format(population)}
            </li>
            <li className={styles.countryDataListItem}>
              <strong>Region:</strong> {region}
            </li>
            <li className={styles.countryDataListItem}>
              <strong>Sub Region:</strong> {subregion}
            </li>
            <li className={styles.countryDataListItem}>
              <strong>Capital:</strong> {capital}
            </li>
          </ul>

          <ul className={styles.countryDataList}>
            <li className={styles.countryDataListItem}>
              <strong>Top Level Domain: </strong> {tld[0]}
            </li>
            <li className={styles.countryDataListItem}>
              <strong>Currencies: </strong>
              {Object.values(currencies)[0]?.name}
            </li>
            <li className={styles.countryDataListItem}>
              <strong>Languages: </strong>
              {Object.values(languages).join(', ')}
            </li>
          </ul>
        </div>

        <div className={styles.countryInfoMeta}>
          <strong>Border Countries: </strong>

          {!borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <div className={styles.countryInfoMetaTags}>
              {neighbors.map((neighbor) => (
                <span
                  key={neighbor}
                  className={styles.countryInfoMetaTagsSpan}
                  onClick={() =>
                    navigate(
                      `/country/${neighbor.toLowerCase().split(' ').join('?')}`,
                      { relative: 'path' },
                    )
                  }
                >
                  {neighbor}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
