import { type OnSearchHandler } from '@shared/types/hooks'
import { selectSearchFilter } from '@store/selectors/filter-selectors'
import { setSearchFilter } from '@store/slices/filterSlice'
import { useAppDispatch, useAppSelector } from '@store/store'

export const useSearch = (): [string, OnSearchHandler] => {
  const dispatch = useAppDispatch()
  const search = useAppSelector(selectSearchFilter)

  const setSearch: OnSearchHandler = (e): void => {
    dispatch(setSearchFilter(e.target.value))
  }

  return [search, setSearch]
}
