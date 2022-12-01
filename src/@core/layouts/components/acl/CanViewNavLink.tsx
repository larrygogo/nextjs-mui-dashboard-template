// ** React Imports
import { ReactNode, useContext } from 'react'

// ** Component Imports
import {AbilityContext, Action} from 'src/@core/context/AbilityContext'

// ** Types
import { NavLink } from 'src/@core/layouts/types'

interface Props {
  navLink?: NavLink
  children: ReactNode
}

const CanViewNavLink = (props: Props) => {
  // ** Props
  const { children, navLink } = props

  // ** Hook
  const ability = useContext(AbilityContext)

  return ability && ability.can(navLink?.action as Action, navLink?.subject as string) ? <>{children}</> : null
}

export default CanViewNavLink
