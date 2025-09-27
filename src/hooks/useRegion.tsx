import { type OnSelectHandler } from '@shared/types/hooks'
import { type Region } from '@shared/types/regions'
import { selectRegionFilter } from '@store/selectors/filter-selectors'
import { setRegionFilter } from '@store/slices/filterSlice'
import { useAppDispatch, useAppSelector } from '@store/store'

export const useRegion = (): [Region | '', OnSelectHandler] => {
  const dispatch = useAppDispatch()
  const region = useAppSelector(selectRegionFilter)

  const setRegion: OnSelectHandler = (reg) => {
    if (reg) {
      dispatch(setRegionFilter(reg.value))
    } else {
      dispatch(setRegionFilter(''))
    }
  }

  return [region, setRegion]
}
