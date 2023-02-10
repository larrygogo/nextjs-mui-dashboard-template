import {NavMenu} from 'src/@core/layouts/types'

const menus = (): NavMenu => {
  return [
    {
      title: 'Dashboard',
      icon: 'HomeOutline',
      children: [
        {
          title: 'Dashboard',
          icon: 'HomeOutline',
          path: '/dashboard',
          action: "access",
          subject: "dashboard"
        },
        {
          title: 'Settings',
          icon: 'HomeOutline',
          path: '/settings',
          action: "access",
          subject: "settings"
        },
      ]
    },
    {
      title: 'Purchase',
      icon: 'HomeOutline',
      path: '/purchase',
      action: "access",
      subject: "purchase"
    },
    {
      title: 'Settings',
      icon: 'HomeOutline',
      path: '/settings',
    },
  ]
}

export default menus;
