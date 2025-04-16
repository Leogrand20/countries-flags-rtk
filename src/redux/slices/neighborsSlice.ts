import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { setError } from './errorSlice'
import { Extra } from '../../types/extra'
import { Country } from '../../types/countries'
import { NeighborsSlice } from '../../types/neighbors'

const initialState: NeighborsSlice = {
  neighbors: [],
}

export const fetchNeighbors = createAsyncThunk<
  string[],
  string[],
  { extra: Extra }
>(
  'neighbors/fetchNeighbors',
  async (codes, { dispatch, rejectWithValue, extra: { api, client } }) => {
    try {
      return (await client.get(api.getNeighborsCountries(codes))).data
        .map((country: Country) => country.name?.common)
        .toSorted()
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message))

        return rejectWithValue(error)
      }
    }
  }
)

const neighborsSlice = createSlice({
  name: 'neighbors',
  initialState,

  reducers: {},

  extraReducers: ({ addCase }) => {
    addCase(fetchNeighbors.fulfilled, (state, { payload }) => {
      state.neighbors = payload
    })
  },
})

export default neighborsSlice.reducer
