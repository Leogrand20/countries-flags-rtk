import { type Region } from '@shared/types/regions'

export type FilterSlice = {
  search: string
  region: Region | ''
  sortMode: string | null
}
