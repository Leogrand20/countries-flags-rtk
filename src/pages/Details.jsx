import { useEffect, useState, useTransition } from 'react'
import { useNavigate, useParams } from 'react-router'
import { IoArrowBack } from 'react-icons/io5'

import { Preloader } from '../components/preloader/Preloader'
import { CountryInfo } from '../components/countries/CountryInfo'

import { getCountryByName } from '../../api'

export const Details = () => {
  const [country, setCountry] = useState(null)
  const { countryName } = useParams()
  const [isPending, startTransition] = useTransition()
  const navigate = useNavigate()

  useEffect(() => {
    startTransition(() => {
      getCountryByName(countryName).then((data) => {
        setCountry(data[0])
      })
    })
  }, [countryName])

  return (
    <>
      <button className="btn-back" type="button" onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </button>

      {isPending ? <Preloader /> : <CountryInfo {...country} />}
    </>
  )
}
