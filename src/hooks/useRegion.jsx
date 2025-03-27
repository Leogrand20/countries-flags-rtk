import { useDispatch, useSelector } from 'react-redux'

import {
  selectRegionFilter,
  setRegionFilter,
} from '../redux/slices/filterSlice'

export const useRegion = () => {
  const dispatch = useDispatch()
  const region = useSelector(selectRegionFilter)

  const handleSetRegion = (reg) => {
    dispatch(setRegionFilter(reg?.value || ''))
  }

  return [region, handleSetRegion]
}
