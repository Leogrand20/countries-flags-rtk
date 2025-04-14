import { createSlice } from '@reduxjs/toolkit'

import { Filters } from '../../types/filters'

const initialState: Filters = {
  search: '',
  region: '',
  sortMode: null,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    setSearchFilter: (state, { payload }): void => {
      state.search = payload
    },

    setRegionFilter: (state, { payload }): void => {
      state.region = payload
    },

    setSortModeFilter: (state, { payload }): void => {
      state.sortMode = payload
    },
  },
})

export const { setSearchFilter, setRegionFilter, setSortModeFilter } =
  filterSlice.actions

export default filterSlice.reducer
