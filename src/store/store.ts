import { useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import axios from 'axios'

import countriesReducer from '@store/slices/countriesSlice'
import countryReducer from '@store/slices/countrySlice'
import errorReducer from '@store/slices/errorSlice'
import filterReducer from '@store/slices/filterSlice'
import neighborsReducer from '@store/slices/neighborsSlice'

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
        extraArgument: {
          client: axios,
        },
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
