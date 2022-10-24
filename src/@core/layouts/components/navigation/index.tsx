import {Settings} from "src/@core/context/types";
import {ReactNode, useRef} from "react";
import Drawer from "./Drawer";
import NavHeader from "./NavHeader";
import NavMenuItems from "./NavMenuItems";
import {NavMenu} from "../../types";
import {styled} from "@mui/material/styles";
import Box, {BoxProps} from "@mui/material/Box";
import PerfectScrollbar from 'react-perfect-scrollbar'
import {List} from "@mui/material";


const StyledBoxForShadow = styled(Box)<BoxProps>(({ theme }) => ({
  top: 60,
  left: -8,
  zIndex: 2,
  display: 'none',
  position: 'absolute',
  pointerEvents: 'none',
  width: 'calc(100% + 15px)',
  height: theme.mixins.toolbar.minHeight,
  '&.d-block': {
    display: 'block'
  }
}))

type NavigationProps = {
  hidden: boolean
  navMenu?: NavMenu
  navVisible: boolean
  setNavVisible: (value: boolean) => void
  setNavHover: (values: boolean) => void
  children: ReactNode
  settings: Settings
  saveSettings: (settings: Settings) => void
}

const Navigation = (props: NavigationProps) => {
  const {hidden, settings, children} = props;
  const shadowRef = useRef(null)

  const ScrollWrapper = hidden ? Box : PerfectScrollbar

  const handleInfiniteScroll = (ref: HTMLElement) => {
    if (ref) {
      // @ts-ignore
      ref._getBoundingClientRect = ref.getBoundingClientRect

      ref.getBoundingClientRect = () => {
        // @ts-ignore
        const original = ref._getBoundingClientRect()

        return { ...original, height: Math.floor(original.height) }
      }
    }
  }

  const scrollMenu = (container: any) => {
    // @ts-ignore
    shadowRef.current.classList.add('d-block')
  }

  return <Drawer {...props}>
    <NavHeader {...props} />
    <StyledBoxForShadow />
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <PerfectScrollbar
        options={{ wheelPropagation: false }}
      >
        <List className='nav-items'>
          <NavMenuItems {...props} />
        </List>
      </PerfectScrollbar>
    </Box>
  </Drawer>
}

export default Navigation
