import {ListItem, ListItemButton, ListItemButtonProps} from "@mui/material";
import Link from "next/link";
import {NavLink} from "../../types";
import {ElementType} from "react";
import {styled} from "@mui/material/styles";
import Box, {BoxProps} from "@mui/material/Box";
import { handleURLQueries } from "../../utils";
import {useRouter} from "next/router";

const MenuNavLink = styled(ListItemButton)<
  ListItemButtonProps & { component?: ElementType; target?: '_blank' | undefined }
  >(({ theme }) => ({
  width: '100%',
  borderRadius: 4,
  color: theme.palette.text.secondary,
  padding: '0 14px',
  transition: 'padding-left .25s ease-in-out, background-color .25s ease-in-out, color .25s ease-in-out',
  '&.active, &:hover': {
    color: theme.palette.customColors.main,
    backgroundColor: theme.palette.action.active,
  },
  '&.active': {
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
  item: NavLink
}

const NavMenuLink = (props: Props) => {
  const {item} = props;
  const router = useRouter()
  const isNavLinkActive = () => {
    if (router.pathname === item.path || handleURLQueries(router, item.path)) {
      return true
    } else {
      return false
    }
  }
  return (
    <ListItem>
      <Link passHref href={item.path === undefined ? '/' : `${item.path}`}>
        <MenuNavLink
          component="a"
          className={isNavLinkActive() ? 'active' : ''}
        >
          <MenuItemTextMetaWrapper>
            {item.title}
          </MenuItemTextMetaWrapper>
        </MenuNavLink>
      </Link>
    </ListItem>
  )
}

export default NavMenuLink
