import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { BASE_URL } from '../../../config'
import { setError } from '../slices/errorSlice'

const initialState = {
  country: {},
  isLoading: false,
}

export const fetchCurrentCountry = createAsyncThunk(
  'country/fetchCurrentCountry',
  async (countryName, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios(BASE_URL + 'name/' + countryName)

      return data[0]
    } catch (error) {
      dispatch(setError(error.message))

      return rejectWithValue(error)
    }
  },
)

const currentCountrySlice = createSlice({
  name: 'country',
  initialState,

  extraReducers: ({ addCase }) => {
    addCase(fetchCurrentCountry.pending, (state) => {
      state.isLoading = true
    })

    addCase(fetchCurrentCountry.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.country = structuredClone(payload)
    })

    addCase(fetchCurrentCountry.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const selectCountry = (state) => state.country.country
export const selectIsLoading = (state) => state.country.isLoading

export default currentCountrySlice.reducer
