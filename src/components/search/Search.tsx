import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { IoSearch } from 'react-icons/io5'

import { CustomSelect } from './CustomSelect'
import { selectRegionFilter } from '../../redux/selectors/filter-selectors'

import { useSearch } from '../../hooks/useSearch'
import { useSortMode } from '../../hooks/useSortMode'

import styles from './Search.module.css'

export const Search = ({ onSearch }) => {
  const [search, handleSetSearchFilter] = useSearch()
  const [sortMode, handleSetSortModeFilter] = useSortMode()
  const region = useSelector(selectRegionFilter)

  useEffect(() => {
    onSearch(search, region, sortMode)
  }, [search, region, sortMode])

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
          value={search}
          onChange={handleSetSearchFilter}
        />
      </label>

      <div className="form-radio">
        <input
          type="radio"
          name="sort"
          value="asc"
          checked={sortMode === 'asc'}
          onChange={handleSetSortModeFilter}
        />
        A-Z
        <input
          type="radio"
          name="sort"
          value="desc"
          checked={sortMode === 'desc'}
          onChange={handleSetSortModeFilter}
        />
        Z-A
      </div>

      <CustomSelect />
    </div>
  )
}
