import { configureStore } from '@reduxjs/toolkit'

import countriesReducer from './slices/countriesSlice'
import countryReducer from './slices/currentCountrySlice'

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    country: countryReducer,
  },
})
