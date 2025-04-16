import { useAppDispatch, useAppSelector } from "../redux/store";
import { setRegionFilter } from "../redux/slices/filterSlice";
import { selectRegionFilter } from "../redux/selectors/filter-selectors";
import { Region } from "../types/regions";
import { OnSelectHandler } from "../types/hooks";

export const useRegion = (): [Region | "", OnSelectHandler] => {
  const dispatch = useAppDispatch();
  const region = useAppSelector(selectRegionFilter);

  const setRegion: OnSelectHandler = (reg) => {
    if (reg) {
      dispatch(setRegionFilter(reg.value));
    } else {
      dispatch(setRegionFilter(""));
    }
  };

  return [region, setRegion];
};
