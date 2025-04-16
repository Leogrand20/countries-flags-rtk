import { useAppDispatch, useAppSelector } from "../redux/store";
import { setRegionFilter } from "../redux/slices/filterSlice";
import { selectRegionFilter } from "../redux/selectors/filter-selectors";

export const useRegion = () => {
  const dispatch = useAppDispatch();
  const region = useAppSelector(selectRegionFilter);

  const handleSetRegion = (reg: HTMLSelectElement) => {
    dispatch(setRegionFilter(reg?.value || ""));
  };

  return [region, handleSetRegion];
};
