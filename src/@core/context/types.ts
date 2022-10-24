import {ReactNode} from "react";
import {AppBar, Content, Footer, Layout, ThemeColor} from "src/@core/layouts/types";
import {PaletteMode} from "@mui/material";

export type Theme = {
  mode?: PaletteMode
  layout?: Layout
  appBar?: AppBar
  footer?: Footer
  content?: Content
  themeColor?: ThemeColor
}

export type SettingsContextValue = {
  theme: Theme
  saveTheme: (theme: Theme) => void
}

export type SettingsProviderProps = {
  children: ReactNode
}
