import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { BASE_URL } from '../../../config'
import { createCountry } from '../../utils/createCountry'

const initialState = {
  countries: [],
}

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    try {
      const { data } = await axios(
        BASE_URL + 'all?fields=name,capital,flags,population,region',
      )

      return createCountry(data)
    } catch (error) {}
  },
)

const countriesSlice = createSlice({
  name: 'countries',
  initialState,

  extraReducers: ({ addCase }) => {
    addCase(fetchCountries.fulfilled, (state, { payload }) => {
      state.countries = [...payload]
    })
  },
})

export const selectCountries = (state) => state.countries.countries

export default countriesSlice.reducer
