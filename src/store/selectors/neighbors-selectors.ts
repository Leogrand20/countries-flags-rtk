import { type RootState } from '@store/store'

export const selectNeighbors = (state: RootState) => state.neighbors.neighbors
