import {Icon, ListItem, ListItemButton, ListItemButtonProps, ListItemIcon} from "@mui/material";
import Link from "next/link";
import {NavLink} from "../../types";
import {ElementType} from "react";
import {styled} from "@mui/material/styles";
import Box, {BoxProps} from "@mui/material/Box";
import { handleURLQueries } from "../../utils";
import {useRouter} from "next/router";
import {LayoutConfig} from "../../../context/types";
import Translations from "../Translations";

const MenuNavLink = styled(ListItemButton)<
  ListItemButtonProps & { component?: ElementType; target?: '_blank' | undefined }
  >(({ theme }) => ({
  width: '100%',
  borderRadius: 4,
  color: theme.palette.text.secondary,
  padding: '0 14px',
  pr: 0,
  transition: 'padding-left .25s ease-in-out, background-color .25s ease-in-out, color .25s ease-in-out',
  '&.active, &:hover': {
    color: theme.palette.customColors.main,
  },
  '&.hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.active': {
    backgroundColor: theme.palette.action.active,
    '& .MuiTypography-root, & .MuiListItemIcon-root': {
      color: `${theme.palette.common.white} !important`
    }
  }
}))

const MenuItemTextMetaWrapper = styled(Box)<BoxProps>({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'opacity .25s ease-in-out',
  overflow: 'hidden',
  fontSize: 14,
  height: 45,
})

type Props = {
  parent: boolean
  item: NavLink
  navHover: boolean
  config: LayoutConfig
}

const NavMenuLink = (props: Props) => {
  const {parent, item, config, navHover} = props;
  const {navCollapsed} = config
  const router = useRouter()
  const isNavLinkActive = () => {
    return router.pathname === item.path || handleURLQueries(router, item.path);
  }
  return (
    <ListItem disableGutters={parent}>
      <Link passHref href={item.path === undefined ? '/' : `${item.path}`}>
        <MenuNavLink
          component="a"
          className={isNavLinkActive() ? 'active' : ''}
        >
          <ListItemIcon
            sx={{
              color: 'text.primary',
              transition: 'margin .25s ease-in-out',
              mr: navCollapsed && !navHover ? 0 : 2.5,
            }}
          >
            <Icon>{item.icon}</Icon>
          </ListItemIcon>
          <MenuItemTextMetaWrapper>
            <Translations text={item.title}/>
          </MenuItemTextMetaWrapper>
        </MenuNavLink>
      </Link>
    </ListItem>
  )
}

export default NavMenuLink
