// ** React Imports
import { useEffect } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Spinner Import
import Spinner from 'src/@core/components/spinner'

// ** Hook Imports

/**
 *  Set Home URL based on User Roles
 */
export const getHomeRoute = (role: string) => {
  return '/dashboard'
}

const Home = () => {
  // ** Hooks
  const router = useRouter()
  useEffect(() => {
    const homeRoute = '/dashboard'
    // Redirect user to Home URL
    router.replace(homeRoute)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // const router = useRouter()
  //
  // useEffect(() => {
  //   if (auth.user && auth.user.role) {
  //     const homeRoute = getHomeRoute(auth.user.role)
  //
  //     // Redirect user to Home URL
  //     router.replace(homeRoute)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  //
  // return <Spinner />
}

export default Home
