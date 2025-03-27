import { configureStore } from '@reduxjs/toolkit'

import countriesReducer from './slices/countriesSlice'
import countryReducer from './slices/currentCountrySlice'
import neighborsReducer from './slices/neighborsSlice'
import errorReducer from './slices/errorSlice'
import filterReducer from './slices/filterSlice'

import * as api from '../../api'

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    country: countryReducer,
    neighbors: neighborsReducer,
    error: errorReducer,
    filter: filterReducer,
  },

  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      thunk: {
        extraArgument: api,
      },
    }),
})
