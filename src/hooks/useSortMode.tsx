import { type OnCheckboxHandler } from '@shared/types/hooks'
import { selectSortModeFilter } from '@store/selectors/filter-selectors'
import { setSortModeFilter } from '@store/slices/filterSlice'
import { useAppDispatch, useAppSelector } from '@store/store'

export const useSortMode = (): [string | null, OnCheckboxHandler] => {
  const dispatch = useAppDispatch()
  const sortMode = useAppSelector(selectSortModeFilter)

  const setSortMode: OnCheckboxHandler = (e) => {
    dispatch(setSortModeFilter(e.target.value))
  }

  return [sortMode, setSortMode]
}
