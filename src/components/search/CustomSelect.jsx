import Select from 'react-select'
import styles from './Search.module.css'

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
]

export const CustomSelect = ({ value, onChange }) => {
  return (
    <Select
      placeholder="Filter by Region"
      className={styles.select}
      options={options}
      value={value}
      onChange={onChange}
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
