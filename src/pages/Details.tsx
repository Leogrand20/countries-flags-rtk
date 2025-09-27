import { type FC, useEffect } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { type NavigateFunction, useNavigate, useParams } from 'react-router-dom'

import { CountryInfo } from '@components/countries/CountryInfo'
import { Preloader } from '@components/preloader/Preloader'
import { selectIsLoading } from '@store/selectors/country-selectors'
import { fetchCountry } from '@store/slices/countrySlice'
import { useAppDispatch, useAppSelector } from '@store/store'

export const Details: FC = () => {
  const { countryName } = useParams()
  const isLoading = useAppSelector(selectIsLoading)
  const navigate: NavigateFunction = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (countryName) {
      dispatch(fetchCountry(countryName))
    }
  }, [countryName, dispatch])

  return (
    <>
      <button className="btn-back" type="button" onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </button>

      {isLoading ? <Preloader /> : <CountryInfo />}
    </>
  )
}
