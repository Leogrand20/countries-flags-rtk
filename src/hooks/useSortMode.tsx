import { useDispatch, useSelector } from 'react-redux'

import {
  setSortModeFilter,
  selectSortModeFilter,
} from '../redux/slices/filterSlice'

export const useSortMode = () => {
  const dispatch = useDispatch()
  const sortMode = useSelector(selectSortModeFilter)

  const handleSetSortModeFilter = (e) => {
    dispatch(setSortModeFilter(e.target.value))
  }

  return [sortMode, handleSetSortModeFilter]
}
