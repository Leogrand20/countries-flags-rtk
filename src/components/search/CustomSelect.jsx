import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'

import {
  selectRegionFilter,
  setRegionFilter,
} from '../../redux/slices/filterSlice'

import styles from './Search.module.css'

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
]

export const CustomSelect = () => {
  const region = useSelector(selectRegionFilter)
  const dispatch = useDispatch()

  return (
    <Select
      placeholder="Filter by Region"
      className={styles.select}
      options={options}
      value={region}
      onChange={(reg) => dispatch(setRegionFilter(reg?.value || ''))}
      isClearable
      isSearchable={false}
      styles={{
        control: (provided) => ({
          ...provided,
          height: '50px',
          border: 'none',
          borderRadius: 'var(--radii)',
          padding: '0.25rem',
          color: 'var(--colors-text)',
          backgroundColor: 'var(--colors-ui-base)',
          boxShadow: 'var(--shadow)',
        }),
        option: (provided, state) => ({
          ...provided,
          cursor: 'pointer',
          color: 'var(--colors-text)',
          backgroundColor: state.isSelected
            ? 'var(--colors-bg)'
            : 'var(--colors-ui-base)',
        }),
      }}
    />
  )
}
