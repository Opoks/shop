import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className=' flex justify-between px-5 py-3 border-b fixed top-0 right-0 left-0 backdrop-blur-md'>
        <p className=' text-xl font-bold flex-2  text-amber-50'><Link to='/'>Just-the-Frontend</Link></p>
        <ul className=' flex flex-1 justify-between  '>
            <Link to='/'><li className=' font-semibold text-lg  '>Home</li></Link>
            <Link to='cart'><li className=' font-semibold text-lg '>Cart</li></Link>

        </ul>
    </nav>
  )
}

export default Header