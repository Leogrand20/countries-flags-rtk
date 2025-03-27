import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
  region: '',
  sortMode: null,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    setSearchFilter: (state, { payload }) => {
      state.search = payload
    },

    setRegionFilter: (state, { payload }) => {
      state.region = payload
    },

    setSortModeFilter: (state, { payload }) => {
      state.sortMode = payload
    },
  },
})

export const { setSearchFilter, setRegionFilter, setSortModeFilter } =
  filterSlice.actions

export const selectSearchFilter = (state) => state.filter.search
export const selectRegionFilter = (state) => state.filter.region
export const selectSortModeFilter = (state) => state.filter.sortMode

export default filterSlice.reducer
