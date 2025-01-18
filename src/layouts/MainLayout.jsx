import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <Navbar className='block'/>
      <Outlet/>
    </div>
  )
}

export default MainLayout
