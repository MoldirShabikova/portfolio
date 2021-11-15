import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <Link to='/'>
        <p className='logo'>MS</p>
      </Link>
      <Link to='/'>
        <p>Home</p>
      </Link>
    </div>
  )
}
