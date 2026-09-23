import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-sky-700 flex justify-between items-center py-3 px-5'>
        <Link to={'/'} className='text-lg'>MediaSearch</Link>
        <div className='flex gap-4 '>
            <Link to={'/'} className='active:scale-95 bg-white px-4 py-2 text-black rounded cursor-pointer text-sm'>Search</Link>
            <Link to={'/collection'} className='active:scale-95 bg-white text-black px-4 py-2 rounded cursor-pointer text-sm'>Collection</Link>
        </div>
    </div>
  )
}

export default Navbar