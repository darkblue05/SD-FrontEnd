import { useEffect } from 'react'
import Spinner from 'src/@core/components/spinner'
import { useAuth } from 'src/hooks/useAuth'

const Home = () => {
  const auth = useAuth()

  return <Spinner sx={{ height: '100%' }} />
}

export default Home
