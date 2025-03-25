import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { BASE_URL } from '../../../config'

const initialState = {
  neighbors: [],
}

export const fetchNeighbors = createAsyncThunk(
  'neighbors/fetchNeighbors',
  async (codes) => {
    try {
      const { data } = await axios(BASE_URL + 'lpha?codes=' + codes.join(','))

      return data.map((country) => country.name.common)
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
