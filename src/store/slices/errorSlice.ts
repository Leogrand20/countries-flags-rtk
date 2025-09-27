import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type ErrorSlice } from '@shared/types/error'

const initialState: ErrorSlice = {
  error: '',
}

const errorSlice = createSlice({
  name: 'error',
  initialState,

  reducers: {
    setError: (state, { payload }: PayloadAction<string>): void => {
      state.error = payload
    },

    clearError: (state): void => {
      state.error = ''
    },
  },
})

export const { setError, clearError } = errorSlice.actions

export default errorSlice.reducer
