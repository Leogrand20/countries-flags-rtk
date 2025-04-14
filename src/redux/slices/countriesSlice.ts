import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { setError } from './errorSlice'
import { Countries, CountriesSlice } from '../../types/countries'
import { Extra } from '../../types/extra'
import { createCountries } from '../../utils/createCountries'

const initialState: CountriesSlice = {
  countries: [],
  isLoading: false,
}

export const fetchCountries = createAsyncThunk<
  Countries,
  undefined,
  { state: { countries: CountriesSlice }; extra: Extra }
>(
  'countries/fetchCountries',
  async (_, { dispatch, rejectWithValue, extra: { api, client } }) => {
    try {
      return (await client.get(api.getAllCountries)).data
    } catch (error) {
      dispatch(setError(error))

      return rejectWithValue(error)
    }
  },
  {
    condition: (_, { getState }) => {
      const { isLoading } = getState().countries

      if (isLoading) return false
    },
  },
)

const countriesSlice = createSlice({
  name: 'countries',
  initialState,

  reducers: {},

  extraReducers: ({ addCase }) => {
    addCase(fetchCountries.pending, (state) => {
      state.isLoading = true
    })

    addCase(fetchCountries.fulfilled, (state, { payload }) => {
      state.isLoading = false

      state.countries = createCountries(payload)
    })

    addCase(fetchCountries.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export default countriesSlice.reducer
