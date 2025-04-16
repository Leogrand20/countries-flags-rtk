import { FC, useEffect } from 'react'
import { NavigateFunction, useNavigate, useParams } from 'react-router'
import { IoArrowBack } from 'react-icons/io5'

import { Preloader } from '../components/preloader/Preloader'
import { CountryInfo } from '../components/countries/CountryInfo'

import { useAppDispatch, useAppSelector } from '../redux/store'
import { fetchCountry } from '../redux/slices/countrySlice'
import { selectIsLoading } from '../redux/selectors/country-selectors'

export const Details: FC = () => {
  const { countryName } = useParams()
  const isLoading = useAppSelector(selectIsLoading)
  const navigate: NavigateFunction = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (countryName) {
      dispatch(fetchCountry(countryName))
    }
  }, [countryName])

  return (
    <>
      <button className="btn-back" type="button" onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </button>

      {isLoading ? <Preloader /> : <CountryInfo />}
    </>
  )
}
