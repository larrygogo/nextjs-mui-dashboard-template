import {LayoutProps} from "./types";
import {styled} from "@mui/material/styles";
import Navigation from "./components/navigation";
import {useState} from "react";
import Box, {BoxProps} from "@mui/material/Box";

const LayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex'
})

const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
})

const Layout = (props: LayoutProps) => {
  const {hidden, children, settings, saveSettings} = props;

  const [navHover, setNavHover] = useState<boolean>(false);
  const [navVisible, setNavVisible] = useState<boolean>(false);

  return (
    <LayoutWrapper className="layout-wrapper">
      <Navigation {...props} navVisible={navVisible} setNavVisible={setNavVisible} setNavHover={setNavHover} />
      <MainContentWrapper className="layout-content-wrapper">
        {children}
      </MainContentWrapper>
    </LayoutWrapper>
  )
}

export default Layout;
