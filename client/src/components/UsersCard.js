import React from 'react'
import { Link } from 'react-router-dom';

const UsersCard = ({userObj:{name,image,email, age,address},userObj}) => {
    // console.log(userObj)
  return (
    <div>
      <h2> Name:  {name}</h2>
      <img src={image} alt="logo"/>
      <h4>Emal: {email}</h4>
      <p>Age: {age}</p>
      <h4>Address: {address}</h4>
      <button><Link to={`/user/${userObj.id}/edit`}>Update Your Information</Link></button>
    </div>
  )
}

export default UsersCard