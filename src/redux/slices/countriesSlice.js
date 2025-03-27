import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { BASE_URL } from '../../../config'
import { createCountries } from '../../utils/createCountries'
import { setError } from '../slices/errorSlice'

const initialState = {
  countries: [],
  isLoading: false,
}

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios(
        BASE_URL + 'all?fields=name,capital,flags,population,region',
      )

      return createCountries(data)
    } catch (error) {
      dispatch(setError(error.message))

      return rejectWithValue(error)
    }
  },
)

const countriesSlice = createSlice({
  name: 'countries',
  initialState,

  extraReducers: ({ addCase }) => {
    addCase(fetchCountries.pending, (state) => {
      state.isLoading = true
    })

    addCase(fetchCountries.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.countries = [...payload]
    })

    addCase(fetchCountries.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const selectCountries = (state) => state.countries.countries
export const selectIsLoading = (state) => state.countries.isLoading

export default countriesSlice.reducer
