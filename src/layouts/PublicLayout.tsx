import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PublicLayout = () => {
  const { user } = useAuth();
  return (
    <div>
      {user ? <Header /> : <Navbar />}
      <Outlet/>
    </div>
  )
}

export default PublicLayout