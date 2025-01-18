import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaNoteSticky } from 'react-icons/fa6'

const Navbar = () => {
    const linkClass = ({isActive})=>isActive?'p-2 mr-2 bg-indigo-500 hover:bg-indigo-600 rounded-md text-white hover:shadow-md hover:shadow-indigo-500/50':' p-2 mr-2  rounded-md text-indigo-500 hover:text-indigo-600';
  return (
    <>
        <nav >
            <div className='h-20'>
                <div className="flex float-left m-4 p-2">
                    <FaNoteSticky className='text-4xl text-indigo-500  '/>
                    <h1 className='text-2xl text-indigo-500 ml-2 '>Note</h1>
                </div>
                <div className='float-right flex m-4'>
                    <NavLink to='/' className={linkClass}>
                        Note
                    </NavLink>
                    <NavLink to='/favorite' className={linkClass}>
                        Favorite
                    </NavLink>
                </div>

            </div>
        </nav>
    </>
  )
}

export default Navbar
