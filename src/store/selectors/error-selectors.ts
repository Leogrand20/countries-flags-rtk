import { type RootState } from '@store/store'

export const selectError = (state: RootState) => state.error.error
