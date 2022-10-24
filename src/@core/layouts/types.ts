import {ReactNode} from "react";
import {Settings} from "../context/types";

export type Layout = 'vertical' | 'horizontal' | 'blank' | 'blankWithAppBar'

export type Content = 'full' | 'boxed'

export type AppBar = 'fixed' | 'static' | 'hidden'

export type Footer = 'fixed' | 'static' | 'hidden'

export type ThemeColor = {
  light: string;
  main: string;
  dark: string;
}

export type NavLink = {
  icon?: any
  path: string
  title: string
  disabled?: boolean
}


export type NavSectionTitle = {
  title: string
}

export type NavMenu = (NavLink | NavSectionTitle)[]

export type LayoutProps = {
  hidden: boolean
  settings: Settings
  saveSettings: (values: Settings) => void
  children: ReactNode
  navMenu?: NavMenu
  appBarContent?: (props?: any) => ReactNode
  navMenuContent?: (props?: any) => ReactNode
  navMenuBranding?: (props?: any) => ReactNode
  afterNavMenuContent?: (props?: any) => ReactNode
  beforeNavMenuContent?: (props?: any) => ReactNode
}

export type BlankLayoutProps = {
  children: ReactNode
}
