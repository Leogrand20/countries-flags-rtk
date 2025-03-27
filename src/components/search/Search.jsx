import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoSearch } from 'react-icons/io5'

import { CustomSelect } from './CustomSelect'
import {
  setSearchFilter,
  setSortModeFilter,
  selectSearchFilter,
  selectRegionFilter,
  selectSortModeFilter,
} from '../../redux/slices/filterSlice'

import styles from './Search.module.css'

export const Search = ({ onSearch }) => {
  const dispatch = useDispatch()

  const searchFilter = useSelector(selectSearchFilter)
  const regionFilter = useSelector(selectRegionFilter)
  const sortModeFilter = useSelector(selectSortModeFilter)

  useEffect(() => {
    onSearch(searchFilter, regionFilter, sortModeFilter)
  }, [searchFilter, regionFilter, sortModeFilter])

  return (
    <div className={styles.wrapper}>
      <label htmlFor="search" className={styles.labelSearch}>
        <IoSearch />

        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          className={styles.inputSearch}
          value={searchFilter}
          onChange={(e) => dispatch(setSearchFilter(e.target.value))}
        />
      </label>

      <div className="form-radio">
        <input
          type="radio"
          name="sort"
          value="asc"
          checked={sortModeFilter === 'asc'}
          onChange={(e) => dispatch(setSortModeFilter(e.target.value))}
        />
        A-Z
        <input
          type="radio"
          name="sort"
          value="desc"
          checked={sortModeFilter === 'desc'}
          onChange={(e) => dispatch(setSortModeFilter(e.target.value))}
        />
        Z-A
      </div>

      <CustomSelect />
    </div>
  )
}
