import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex justify-between px-5 h-[50px] text-white bg-gray-500 items-center '  >
        <h3 className='font-bold' >Dummy Store</h3>
        <div className='mr-2'>
            <Link to='/' >Home </Link>
            <Link to='/favorites'>Favorites </Link>
        </div>
    </div>
  )
}

export default Navbar