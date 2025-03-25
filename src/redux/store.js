import { configureStore } from '@reduxjs/toolkit'

import countryReducer from './slices/countriesSlice'

export const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
})
