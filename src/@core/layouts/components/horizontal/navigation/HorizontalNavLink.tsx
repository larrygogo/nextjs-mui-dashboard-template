// ** React Imports
import {ElementType, Fragment} from 'react'

// ** Next Imports
import Link from 'next/link'
import {useRouter} from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import List from '@mui/material/List'
import {styled} from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import ListItemIcon from '@mui/material/ListItemIcon'
import MuiListItem, {ListItemButtonProps} from '@mui/material/ListItemButton'

// ** Third Party Imports
import clsx from 'clsx'

// ** Types
import {NavLink} from 'src/@core/layouts/types'

// ** Custom Components Imports
import UserIcon from 'src/@core/layouts/components/UserIcon'
import Translations from 'src/@core/layouts/components/Translations'
import CanViewNavLink from 'src/@core/layouts/components/acl/CanViewNavLink'

// ** Util Imports
import {hexToRGBA} from 'src/@core/utils/hex-to-rgba'
import {handleURLQueries} from 'src/@core/layouts/utils'
import {LayoutConfig} from "src/@core/context/types";

interface Props {
  item: NavLink
  config: LayoutConfig
  hasParent: boolean
}

const ListItem = styled(MuiListItem)<
  ListItemButtonProps & { component?: ElementType; target?: '_blank' | undefined }
>(({theme}) => ({
  width: 'auto',
  paddingTop: theme.spacing(2.25),
  color: theme.palette.text.primary,
  paddingBottom: theme.spacing(2.25),
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  },
  '&.active, &.active:hover': {
    backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08)
  },
  '&.active .MuiTypography-root, &.active .MuiListItemIcon-root': {
    color: theme.palette.primary.main
  },
  '&:focus-visible': {
    outline: 0,
    backgroundColor: theme.palette.action.focus
  }
}))

const HorizontalNavLink = (props: Props) => {
  // ** Props
  const {item, config, hasParent} = props

  // ** Hook & Vars
  const router = useRouter()
  const {menuTextTruncate} = config

  const icon = item.icon ? item.icon : null

  const Wrapper = !hasParent ? List : Fragment

  const isNavLinkActive = () => {
    if (router.pathname === item.path || handleURLQueries(router, item.path)) {
      return true
    } else {
      return false
    }
  }

  return (
    <CanViewNavLink navLink={item}>
      <Wrapper {...(!hasParent ? {component: 'div', sx: {py: 2.75}} : {})}>
        <Link href={item.path === undefined ? '/' : `${item.path}`}>
          <ListItem
            component={'div'}
            disabled={item.disabled}
            {...(item.disabled && {tabIndex: -1})}
            className={clsx({active: isNavLinkActive()})}
            target={item.openInNewTab ? '_blank' : undefined}
            onClick={e => {
              if (item.path === undefined) {
                e.preventDefault()
                e.stopPropagation()
              }
            }}
            sx={{
              ...(item.disabled ? {pointerEvents: 'none'} : {cursor: 'pointer'}),
              ...(!hasParent
                ? {
                  px: 5.5,
                  borderRadius: 3.5,
                  '&.active, &.active:hover': {
                    boxShadow: 3,
                    backgroundColor: theme => theme.palette.primary.main,
                    '& .MuiTypography-root, & .MuiListItemIcon-root': {
                      color: 'common.white'
                    }
                  }
                }
                : {px: 5})
            }}
          >
            <Box sx={{gap: 2, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ...(menuTextTruncate && {overflow: 'hidden'})
                }}
              >
                <ListItemIcon sx={{color: 'text.primary', mr: !hasParent ? 2 : 3}}>
                  <UserIcon icon={icon} fontSize={'1.375rem'}/>
                </ListItemIcon>
                <Typography {...(menuTextTruncate && {noWrap: true})}>
                  <Translations text={item.title}/>
                </Typography>
              </Box>
              {item.badgeContent ? (
                <Chip
                  label={item.badgeContent}
                  color={item.badgeColor || 'primary'}
                  sx={{
                    height: 20,
                    fontWeight: 500,
                    '& .MuiChip-label': {px: 1.5, textTransform: 'capitalize'}
                  }}
                />
              ) : null}
            </Box>
          </ListItem>
        </Link>
      </Wrapper>
    </CanViewNavLink>
  )
}

export default HorizontalNavLink
