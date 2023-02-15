import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <NavLink to="/"><h2>Home</h2></NavLink>
    <li><NavLink to='/productions/new'>New Production</NavLink></li>

    </div>
  )
}

export default Navbar