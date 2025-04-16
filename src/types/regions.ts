export type Region = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania'

export type RegionOption = {
  [RegKey in Region]: { value: RegKey; label: RegKey }
}
