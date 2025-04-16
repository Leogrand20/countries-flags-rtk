import { useAppDispatch, useAppSelector } from "../redux/store";

import { setRegionFilter } from "../redux/slices/filterSlice";
import { selectRegionFilter } from "../redux/selectors/filter-selectors";
import { CountryOption } from "../components/search/CustomSelect";
import { Region } from "../types/regions";
import { SingleValue } from "react-select";

type OnSelectHandler = (reg: SingleValue<CountryOption>) => void;

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
