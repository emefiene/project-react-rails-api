import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({updateUser}) => {

  const handleLogOut = () => {
    fetch(`/logout`, {
      method:"DELETE"
    })
    .then(res =>{
      if(res.ok){
        updateUser()
      }
    })
  }
  
  return (
    <div>
    <button onClick={handleLogOut}>Log Out</button>
    <NavLink to="/"><h2>Home</h2></NavLink>
    <li><NavLink to='/productions/new'>New Production</NavLink></li>
    <li><NavLink to='/users/new'>Sign Up</NavLink></li>
    <li><NavLink to='/users/1'>User Page</NavLink></li>
    <li><NavLink to='/users'>View All Registered users</NavLink></li>
    </div>
  )
}

export default Navbar

