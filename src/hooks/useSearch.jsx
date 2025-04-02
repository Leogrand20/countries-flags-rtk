import { useDispatch, useSelector } from 'react-redux'

import {
  setSearchFilter,
  selectSearchFilter,
} from '../redux/slices/filterSlice'

export const useSearch = () => {
  const dispatch = useDispatch()
  const search = useSelector(selectSearchFilter)

  const handleSetSearchFilter = (e) => {
    dispatch(setSearchFilter(e.target.value))
  }

  return [search, handleSetSearchFilter]
}
