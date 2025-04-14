import { FC, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { IoArrowBack } from 'react-icons/io5'

import { Preloader } from '../components/preloader/Preloader'
import { CountryInfo } from '../components/countries/CountryInfo'

import { fetchCountry } from '../redux/slices/countrySlice'
import { selectIsLoading } from '../redux/selectors/country-selectors'

export const Details: FC = () => {
  const { countryName } = useParams()
  const isLoading = useSelector(selectIsLoading)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCountry(countryName))
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
