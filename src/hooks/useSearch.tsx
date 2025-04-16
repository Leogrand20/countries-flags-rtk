import { ChangeEvent } from "react";

import { useAppDispatch, useAppSelector } from "../redux/store";
import { setSearchFilter } from "../redux/slices/filterSlice";
import { selectSearchFilter } from "../redux/selectors/filter-selectors";

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectSearchFilter);

  const setSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchFilter(e.target.value));
  };

  return [search, setSearch];
};
