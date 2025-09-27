import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getNeighborsCountries } from '@shared//api/config'
import { type Country } from '@shared/types/countries'
import { type Extra } from '@shared/types/extra'
import { type NeighborsSlice } from '@shared/types/neighbors'
import { setError } from '@store/slices/errorSlice'

const initialState: NeighborsSlice = {
  neighbors: [],
}

export const fetchNeighbors = createAsyncThunk<
  string[],
  string[],
  {
    state: { neighbors: NeighborsSlice }
    rejectWithValue: string
    extra: Extra
  }
>(
  'neighbors/fetchNeighbors',
  async (codes, { dispatch, rejectWithValue, extra: { client } }) => {
    try {
      return (await client.get(getNeighborsCountries(codes))).data
        .map((country: Country) => country.name?.common)
        .toSorted()
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message))

        return rejectWithValue(error)
      }

      return rejectWithValue('Unknown error')
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
