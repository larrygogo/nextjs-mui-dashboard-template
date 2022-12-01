// ** React Imports
import { ReactNode, useContext } from 'react'

// ** Component Imports
import {AbilityContext, Action} from 'src/@core/context/AbilityContext'

// ** Types
import { NavSectionTitle } from 'src/@core/layouts/types'

interface Props {
  children: ReactNode
  navTitle?: NavSectionTitle
}

const CanViewNavSectionTitle = (props: Props) => {
  // ** Props
  const { children, navTitle } = props

  // ** Hook
  const ability = useContext(AbilityContext)

  return ability && ability.can(navTitle?.action as Action, navTitle?.subject as string) ? <>{children}</> : null
}

export default CanViewNavSectionTitle
