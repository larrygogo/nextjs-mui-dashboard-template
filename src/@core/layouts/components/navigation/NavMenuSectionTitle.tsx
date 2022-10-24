// ** MUI Imports
import Divider from '@mui/material/Divider'
import {styled, useTheme} from '@mui/material/styles'
import Typography, {TypographyProps} from '@mui/material/Typography'
import MuiListSubheader, {ListSubheaderProps} from '@mui/material/ListSubheader'

// ** Types
import {NavSectionTitle} from 'src/@core/layouts/types'
import {Settings} from 'src/@core/context/types'

// ** Custom Components Imports

interface Props {
  navHover: boolean
  settings: Settings
  item: NavSectionTitle
  collapsedNavWidth: number
  navigationBorderWidth: number
}

// ** Styled Components
const ListSubheader = styled((props: ListSubheaderProps) => <MuiListSubheader component='li' {...props} />)(
  ({theme}) => ({
    lineHeight: 1,
    display: 'flex',
    position: 'static',
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(2),
    backgroundColor: 'transparent'
  })
)

const TypographyHeaderText = styled(Typography)<TypographyProps>(({theme}) => ({
  fontSize: '0.75rem',
  lineHeight: 'normal',
  letterSpacing: '0.21px',
  textTransform: 'uppercase',
  color: theme.palette.text.disabled,
  fontWeight: theme.typography.fontWeightMedium
}))

const NavMenuSectionTitle = (props: Props) => {
  // ** Props
  const {item, navHover, settings, collapsedNavWidth, navigationBorderWidth} = props

  // ** Hook
  const theme = useTheme()

  // ** Vars


  return (
    <ListSubheader
      className='nav-section-title'
    >
      <Divider
        textAlign='left'
        sx={{
          m: 0,
          lineHeight: 'normal',
        }}
      >
        <TypographyHeaderText noWrap>
          {item.title}
        </TypographyHeaderText>
      </Divider>
    </ListSubheader>
  )
}

export default NavMenuSectionTitle
