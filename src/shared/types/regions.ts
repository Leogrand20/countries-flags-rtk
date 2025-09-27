export type Region = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania'

export type RegionOptions = { label: Region; value: Region } | ''

export type RegionOptionsMap = {
  [RegKey in Region]: { label: RegKey; value: RegKey }
}
