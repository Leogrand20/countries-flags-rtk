import { type RootState } from '@store/store'

export const selectCountry = (state: RootState) => state.country.country
export const selectIsLoading = (state: RootState) => state.country.isLoading