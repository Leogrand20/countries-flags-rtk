import { useDispatch, useSelector } from 'react-redux'

import { setRegionFilter } from '../redux/slices/filterSlice'

import { selectRegionFilter } from '../redux/selectors/filter-selectors'

export const useRegion = () => {
  const dispatch = useDispatch()
  const region = useSelector(selectRegionFilter)

  const handleSetRegion = (reg: HTMLSelectElement) => {
    dispatch(setRegionFilter(reg?.value || ''))
  }

  return [region, handleSetRegion]
}
