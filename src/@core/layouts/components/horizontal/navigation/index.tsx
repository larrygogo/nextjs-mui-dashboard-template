// ** MUI Imports
import Box from '@mui/material/Box'

// ** Type Import
import {NavMenu} from 'src/@core/layouts/types'

// ** Menu Components
import HorizontalNavItems from './HorizontalNavItems'
import {LayoutConfig} from "../../../../context/types";

// ** Types
interface Props {
  config: LayoutConfig
  navMenu: NavMenu
}

const Navigation = (props: Props) => {
  return (
    <Box
      className='menu-content'
      sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        '& > *': {
          '&:not(:last-child)': { mr: 2 },

        }
      }}
    >
      <HorizontalNavItems {...props} />
    </Box>
  )
}

export default Navigation
