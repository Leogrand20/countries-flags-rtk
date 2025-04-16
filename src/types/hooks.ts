import { ChangeEventHandler } from 'react'
import { SingleValue } from 'react-select'

import { CountryOption } from '../components/search/CustomSelect'

export type OnSearchHandler = ChangeEventHandler<HTMLInputElement>

export type OnCheckboxHandler = ChangeEventHandler<HTMLInputElement>

export type OnSelectHandler = (reg: SingleValue<CountryOption>) => void
