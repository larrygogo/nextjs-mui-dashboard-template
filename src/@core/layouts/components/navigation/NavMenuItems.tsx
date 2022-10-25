// ** Types Import
import { Template } from 'src/@core/context/types'
import { NavLink, NavSectionTitle, NavMenu } from 'src/@core/layouts/types'

// ** Custom Menu Components
import NavMenuLink from './NavMenuLink'
import NavMenuSectionTitle from './NavMenuSectionTitle'

interface Props {
  navHover?: boolean
  template: Template
  navMenu?: NavMenu
  navVisible?: boolean
  saveTemplate: (values: Template) => void
}

const resolveNavItemComponent = (item: NavLink | NavSectionTitle) => {
  if ((item as NavLink).path) return NavMenuLink
  return NavMenuSectionTitle
}

const NavMenuItems = (props: Props) => {
  // ** Props
  const { navMenu } = props

  const RenderMenuItems = navMenu?.map((item: NavLink | NavSectionTitle, index: number) => {
    const TagName: any = resolveNavItemComponent(item)

    return <TagName {...props} key={index} item={item} />
  })

  return <>{RenderMenuItems}</>
}

export default NavMenuItems
