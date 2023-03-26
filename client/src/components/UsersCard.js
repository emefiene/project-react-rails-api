import React, {useState} from 'react'
import  { Link, useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'

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
    <Card style={{ marginLeft: "20px"}}>
 
      <h2> Name:  {name}</h2>
      <img style={{ width: "300px",
      height: "200px",
      padding: "15px",
      marging: "10px", marginRight: "2px"}}src={image} alt="logo"/>
      <h4>Emal: {email}</h4>
      <p>Age: {age}</p>
      <h4>Address: {address}</h4>
      <button><Link to={`/user/${userObj.id}/edit`}>Update Your Information</Link></button>
      <button onClick={() => handleDeleteUser(userObj)}>Delete User</button>
      {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
    </Card>
  )
}

export default UsersCard
const Card = styled.div`
   background-color: AliceBlue;
   box-shadow: 4px 4px 8px 0px rgb(0, 0,0,0.2);
   display:inline-block;
   text-align:center
   text-decoration: none;
 
   h4{
    font-family: 'Dancing Script', cursive;
   }
   
   a {
    text-decoration: none;
  }
   
`
