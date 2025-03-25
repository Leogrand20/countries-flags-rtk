import { useEffect, useState, useTransition } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { IoArrowBack } from 'react-icons/io5'

import { Preloader } from '../components/preloader/Preloader'
import { CountryInfo } from '../components/countries/CountryInfo'

import {
  fetchCurrentCountry,
  selectCountry,
} from '../redux/slices/currentCountrySlice'

export const Details = () => {
  const country = useSelector(selectCountry)
  const { countryName } = useParams()
  const [isPending, startTransition] = useTransition()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    startTransition(() => {
      dispatch(fetchCurrentCountry(countryName))
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
