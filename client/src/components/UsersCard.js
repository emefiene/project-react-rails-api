import React, {useState} from 'react'
import  { Link, useParams, useHistory } from 'react-router-dom'

const UsersCard = ({userObj:{id,name,image,email, age,address},userObj,deleteUser}) => {
  // console.log(id)
  const params = useParams().id
  const history = useHistory()
  const [errors, setErrors] = useState([])
  // console.log(params)
  function handleDeleteUser(param){
    
    // DELETE to `/productions/${params.id}`
    fetch(`/users/${param.id}`,{
      method:'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      if(res.ok){
        deleteUser(id)
        history.push('/login')
      } else {
        //Display errors
        res.json().then(data => setErrors(Object.entries(data).map(e => `${e[0]} ${e[1]}`)))
      }
    })
  }
  
  return (
    <div>
    {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
      <h2> Name:  {name}</h2>
      <img src={image} alt="logo"/>
      <h4>Emal: {email}</h4>
      <p>Age: {age}</p>
      <h4>Address: {address}</h4>
      <button><Link to={`/user/${userObj.id}/edit`}>Update Your Information</Link></button>
      <button onClick={() => handleDeleteUser(userObj)}>Delete User</button>
      {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
    </div>
  )
}

export default UsersCard