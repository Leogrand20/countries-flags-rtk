import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { BASE_URL } from '../../../config'

const initialState = {
  country: null,
}

export const fetchCurrentCountry = createAsyncThunk(
  'country/fetchCurrentCountry',
  async (countryName) => {
    try {
      const { data } = await axios(BASE_URL + 'name/' + countryName)

      return data[0]
    } catch (error) {}
  },
)

const currentCountrySlice = createSlice({
  name: 'country',
  initialState,

  extraReducers: ({ addCase }) => {
    addCase(fetchCurrentCountry.fulfilled, (state, { payload }) => {
      state.country = structuredClone(payload)
    })
  },
})

export const selectCountry = (state) => state.country.country

export default currentCountrySlice.reducer
