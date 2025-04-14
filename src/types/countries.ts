import { Region } from './regions'

interface Flags {
  png: string
  alt: string
}

interface Name {
  common: string
  official: string
}

interface Currencies {
  [key: string]: {
    name: string
  }
}

interface Languages {
  [key: string]: string
}

export interface Country {
  flags: Flags
  name: Name
  capital: string[]
  region: Region
  subregion: string
  population: number
  tld: string[]
  currencies: Currencies
  borders: string[]
  languages: Languages
}

export type Countries = Country[]
