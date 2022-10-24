import { useContext } from 'react'
import { SettingsContextValue } from 'src/@core/context/types'
import {ThemeContext} from "../context/settingsContext";

export const useSettings = (): SettingsContextValue => useContext(ThemeContext)
