import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getAllCountries } from '@shared/api/config'
import { type Countries, type CountriesSlice } from '@shared/types/countries'
import { type Extra } from '@shared/types/extra'
import { createCountries } from '@utils/createCountries'
import { setError } from '@store/slices/errorSlice'

const initialState: CountriesSlice = {
  countries: [],
  isLoading: false,
}

export const fetchCountries = createAsyncThunk<
  Countries,
  undefined,
  {
    state: { countries: CountriesSlice }
    extra: Extra
    rejectWithValue: string
  }
>(
  'countries/fetchCountries',
  async (_, { dispatch, rejectWithValue, extra: { client } }) => {
    try {
      return (await client.get(getAllCountries)).data
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message))
        return rejectWithValue(error)
      }

      return rejectWithValue('Unknown error')
    }
  },
  {
    condition: (_, { getState }) => {
      const { isLoading } = getState().countries
      if (isLoading) return false
    },
  }
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
