import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSortModeFilter } from "../redux/slices/filterSlice";

import { selectSortModeFilter } from "../redux/selectors/filter-selectors";

export const useSortMode = () => {
  const dispatch = useDispatch();
  const sortMode = useSelector(selectSortModeFilter);

  const setSortMode = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSortModeFilter(e.target.value));
  };

  return [sortMode, setSortMode];
};
