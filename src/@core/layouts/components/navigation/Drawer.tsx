import {Settings} from "src/@core/context/types";
import {ReactNode, useState} from "react";
import MuiSwipeableDrawer, {SwipeableDrawerProps} from "@mui/material/SwipeableDrawer";
import {styled, useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";

const SwipeableDrawer = styled(MuiSwipeableDrawer)<SwipeableDrawerProps>({
  overflowX: 'hidden',
  transition: 'width .25s ease-in-out',
  '& ul': {
    listStyle: 'none'
  },
  '& .MuiListItem-gutters': {
    paddingLeft: 20,
    paddingRight: 20
  },
  '& .MuiDrawer-paper': {
    left: 'unset',
    right: 'unset',
    overflowX: 'hidden',
    transition: 'width .25s ease-in-out, box-shadow .25s ease-in-out'
  }
})

type Props = {
  hidden: boolean
  settings: Settings
  children: ReactNode
  navVisible: boolean
  setNavVisible: (value: boolean) => void
  setNavHover: (values: boolean) => void
}

const Drawer = (props: Props) => {
  const {hidden, settings, navVisible, children, setNavVisible, setNavHover} = props;

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const theme = useTheme()


  // Drawer Props for Mobile & Tablet screens
  const MobileDrawerProps = {
    open: navVisible,
    onOpen: () => setNavVisible(true),
    onClose: () => setNavVisible(false),
    ModalProps: {
      keepMounted: true // Better open performance on mobile.
    }
  }

  // Drawer Props for Desktop screens
  const DesktopDrawerProps = {
    open: true,
    onOpen: () => null,
    onClose: () => null,
    onMouseEnter: () => {
      setNavHover(true)
    },
    onMouseLeave: () => {
      setNavHover(false)
    }
  }

  return <SwipeableDrawer
    variant={hidden ? 'temporary' : 'permanent'}
    {...(!hidden ? DesktopDrawerProps : MobileDrawerProps)}
    PaperProps={{sx: { width: collapsed ? 80 : 223 }}}
    sx={{
      width: collapsed ? 80 : 223,
      '& .MuiDrawer-paper': {
        backgroundColor: theme.palette.background.paper,
        borderRight: 0
      }
    }}
  >
    {children}
  </SwipeableDrawer>
}

export default Drawer
