import { ChangeEvent } from "react";

import { useAppDispatch, useAppSelector } from "../redux/store";
import { setSortModeFilter } from "../redux/slices/filterSlice";
import { selectSortModeFilter } from "../redux/selectors/filter-selectors";

export const useSortMode = () => {
  const dispatch = useAppDispatch();
  const sortMode = useAppSelector(selectSortModeFilter);

  const setSortMode = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSortModeFilter(e.target.value));
  };

  return [sortMode, setSortMode];
};
