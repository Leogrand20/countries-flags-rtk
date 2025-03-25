import { useEffect, useState, useTransition } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { IoArrowBack } from 'react-icons/io5'

import { Preloader } from '../components/preloader/Preloader'
import { CountryInfo } from '../components/countries/CountryInfo'

import {
  fetchCurrentCountry,
  selectCountry,
  selectIsLoading,
} from '../redux/slices/currentCountrySlice'

export const Details = () => {
  const country = useSelector(selectCountry)
  const { countryName } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)

  useEffect(() => {
    dispatch(fetchCurrentCountry(countryName))
  }, [countryName])

  return (
    <>
      <button className="btn-back" type="button" onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </button>

      {isLoading ? <Preloader /> : <CountryInfo {...country} />}
    </>
  )
}
