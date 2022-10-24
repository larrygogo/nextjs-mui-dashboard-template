import {ReactNode} from "react";
import {useSettings} from "../@core/hooks/useSettings";
import Layout from "../@core/layouts/Layout";
import {useMediaQuery} from "@mui/material";
import {Theme} from "@mui/material/styles";
import menus from "../configs/menus";

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  const {settings, saveSettings} = useSettings()

  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      navMenu={menus()}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
