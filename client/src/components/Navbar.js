import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = ({updateUser}) => {
  const [menu, setMenu] = useState(true)

  const handleLogOut = () => {
    fetch(`/logout`, {
      method:"DELETE"
    })
    .then(res =>{
      if(res.ok){
        updateUser(false)
      }
    })
  }
  
  return (
    <Nav>
    <Menu>
      <button onClick={handleLogOut}>Log Out</button>
      {!menu?
      <div onClick={() => setMenu(!menu)}>
        <GiHamburgerMenu size={30}/> 
      </div>:
      <ul>
      <li onClick={() => setMenu(!menu)}>x</li>
    <li><Link to="/"><h2>Home</h2></Link></li>
    <li><Link to='/users/new'>Sign Up</Link></li>
    <li><Link to='/users'>View All Registered users</Link></li>
    <li><Link to='/productions/new'>New Production</Link></li>

    <li><Link to='/users/1'>User Page</Link></li>
    
    </ul>
  }
  </Menu>
    </Nav>
  )
}

export default Navbar
const NavH1 = styled.h1`
font-family: 'Splash', cursive;
`
const Nav = styled.div`
  display: flex;
  justify-content:space-between;
  
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  a{
    text-decoration: none;
    color:black;
    font-family:Arial;
  }
  a:hover{
    color:blue
  }
  ul{
    list-style:none;
  }
  
`;

