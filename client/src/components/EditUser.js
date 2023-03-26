import React, { useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'

function EditUser({updateUserInfor}) {
    
  const [formData, setFormData] = useState({
    image:'',
    name:'',
    password:'',
    password_confirmation:'',
    email:'',
    age:'',
    address:''
  })
  const [errors, setErrors] = useState([])
  const history = useHistory()
  const {id} = useParams()
  useEffect(() => {
    fetch(`/dynamic/${id}`)
    .then(res => res.json())
    .then(setFormData)
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value })
  }


  function onSubmit(e){
    e.preventDefault()
    //PATCH to `/productions/${id}`
    fetch(`/users/${id}`,{
      method:'PATCH',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(formData)
    })
    .then(res => {
      if(res.ok){
        res.json().then(updateUserInfor)
        history.push(`/users/${id}`)
      } else {
        //Display errors
        res.json().then(data => setErrors(Object.entries(data).map(e => `${e[0]} ${e[1]}`)))
      }
    })
  }
//   res.json().then(json => setErrors(Object.entries(json.errors)))
//   {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
  
    return (
      <div className='App'>
     
      <Form onSubmit={onSubmit}>
        <label>Name</label>
        <input type='text' name='name' value={formData.name} onChange={handleChange} />
        <label>
        Password
        </label>
       <input type='password' name='password' value={formData.password} onChange={handleChange} />
       
       <label>
        Password Confirmation
        </label>
       <input type='password' name='password_confirmation' value={formData.password_confirmation} onChange={handleChange} />


        <label>Image</label>
        <input type='text' name='image' value={formData.image} onChange={handleChange} />
         
        <label>Email</label>
        <textarea type='text'  name='email' value={formData.email} onChange={handleChange} />

        <label> Age </label>
        <input type='text' name='age' value={formData.age} onChange={handleChange} />
      
        <label>Address</label>
        <input type='text' name='Address' value={formData.address} onChange={handleChange} />
        
        
      
        <input type='submit' value='Update Production' />
      </Form>
      {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
      </div>
    )
  }
  
  export default EditUser
  const Form = styled.form`
  display:flex;
  flex-direction:column;
  width: 400px;
  margin:auto;
  font-family:Arial;
  font-size:30px;
  input[type=submit]{
    background-color:#42ddf5;
    color: black;
    height:40px;
    font-family:Arial;
    font-size:30px;
    margin-top:10px;
    margin-bottom:10px;
  }
  `