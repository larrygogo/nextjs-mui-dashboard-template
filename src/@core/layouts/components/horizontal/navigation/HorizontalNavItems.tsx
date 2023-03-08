// ** Types
import { NavLink, NavGroup, NavMenu } from 'src/@core/layouts/types'

// ** Custom Navigation Components
import HorizontalNavLink from './HorizontalNavLink'
import HorizontalNavGroup from './HorizontalNavGroup'

interface Props {
  hasParent?: boolean
  navMenu?: NavMenu
}
const resolveComponent = (item: NavGroup | NavLink) => {
  if ((item as NavGroup).children) return HorizontalNavGroup

  return HorizontalNavLink
}

const HorizontalNavItems = (props: Props) => {
  const RenderMenuItems = props.navMenu?.map((item: NavGroup | NavLink, index: number) => {
    const TagName: any = resolveComponent(item)

    return <TagName {...props} key={index} item={item} />
  })

  return <>{RenderMenuItems}</>
}

export default HorizontalNavItems
