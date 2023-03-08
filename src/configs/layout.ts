import {LayoutConfig} from "src/@core/context/types";

const layoutConfig: LayoutConfig = {
  name: 'ResiLab',
  logo: '/images/logo.svg',
  layout: 'vertical',
  mode: 'light',
  appBar: 'fixed',
  footer: 'static',
  content: 'full',
  navWidth: 233,
  navCollapsedWidth: 80,
  navCollapsed: false,
  navAllowCollapse: false,
  menuTextTruncate: true,
  themeColor: {
    main: '#5A8DEE',
    light: '#5A8DEE',
    dark: '#5A8DEE',
  }
}

export default layoutConfig
