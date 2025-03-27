import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  neighbors: [],
}

export const fetchNeighbors = createAsyncThunk(
  'neighbors/fetchNeighbors',
  async (codes, { extra: api }) => {
    try {
      return api.getNeighborsCountries(codes)
    } catch (error) {}
  },
)

const neighborsSlice = createSlice({
  name: 'neighbors',
  initialState,

  extraReducers: ({ addCase }) => {
    addCase(fetchNeighbors.fulfilled, (state, { payload }) => {
      state.neighbors = [...payload]
    })
  },
})

export const selectNeighbors = (state) => state.neighbors.neighbors

export default neighborsSlice.reducer
