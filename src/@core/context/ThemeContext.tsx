import {Theme, SettingsContextValue, SettingsProviderProps} from "./types";
import {createContext, useEffect, useState} from "react";

const initialSettings: Theme = {
  mode: 'light',
  appBar: 'fixed',
  footer: 'static',
  layout: 'vertical',
  content: 'full',
}

// 缓存设置
const storeTheme = (settings: Theme) => {
  const initSettings = Object.assign({}, settings)
  window.localStorage.setItem('settings', JSON.stringify(initSettings))
}

// 恢复设置
const restoreTheme = (): Theme | null => {
  let settings = null
  try {
    const storedData: string | null = window.localStorage.getItem('settings')
    if (storedData) {
      settings = { ...JSON.parse(storedData) }
    } else {
      settings = initialSettings
    }
  } catch (err) {
    console.error(err)
  }
  return settings
}

export const ThemeContext = createContext<SettingsContextValue>({
  saveTheme: () => null,
  theme: initialSettings
})

export const SettingsProvider = ({children}: SettingsProviderProps) => {
  const [settings, setSettings] = useState<Theme>({...initialSettings})

  useEffect(() => {
    const restoredSettings = restoreTheme()

    if (restoredSettings) {
      setSettings({ ...restoredSettings })
    }

  }, [])


  // ** Save Settings
  const saveSettings = (settings: Settings) => {
    setSettings(settings)
    storeSettings(settings)
  }

  // ** Render Provider
  return (
    <ThemeContext.Provider value={{settings, saveSettings}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const SettingsConsumer = ThemeContext.Consumer
