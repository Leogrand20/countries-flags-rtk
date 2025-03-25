import { useState, useEffect } from 'react'
import { IoSearch } from 'react-icons/io5'
import { CustomSelect } from './CustomSelect'
import styles from './Search.module.css'

export const Search = ({ onSearch }) => {
  const [search, setSearch] = useState('')
  const [sortMode, setSortMode] = useState(null)
  const [region, setRegion] = useState('')

  useEffect(() => {
    const regionValue = region?.value || ''

    onSearch(search, regionValue, sortMode)
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
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>

      <div className="form-radio">
        <input
          type="radio"
          name="sort"
          value="asc"
          checked={sortMode === 'asc'}
          onChange={(e) => setSortMode(e.target.value)}
        />
        A-Z
        <input
          type="radio"
          name="sort"
          value="desc"
          checked={sortMode === 'desc'}
          onChange={(e) => setSortMode(e.target.value)}
        />
        Z-A
      </div>

      <CustomSelect value={region} onChange={setRegion} />
    </div>
  )
}
