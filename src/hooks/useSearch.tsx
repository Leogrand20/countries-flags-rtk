import { useDispatch, useSelector } from 'react-redux'

import { setSearchFilter } from '../redux/slices/filterSlice'

import { selectSearchFilter } from '../redux/selectors/filter-selectors'

export const useSearch = () => {
  const dispatch = useDispatch()
  const search = useSelector(selectSearchFilter)

  const handleSetSearchFilter = (e) => {
    dispatch(setSearchFilter(e.target.value))
  }

  return [search, handleSetSearchFilter]
}
