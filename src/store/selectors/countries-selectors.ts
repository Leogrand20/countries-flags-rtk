import { type RootState } from '@store/store'

export const selectCountries = (state: RootState) =>
  state.countries.countries
// noinspection JSUnusedGlobalSymbols
export const selectIsLoading = (state: RootState) =>
  state.countries.isLoading
