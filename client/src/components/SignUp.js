import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

function SignUp({addUser}) {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password_confirmation: '',
        age: "",
        address: "",
        image: ""
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {name, email, password, password_confirmation, age, address, image} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            name,
            email,
            password,
            password_confirmation,
            age,
            address,
            image
        }
       
        fetch(`/users`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(addUser)
                history.push("/login")
            }else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
       
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    return (
        <div> 
        <Form onSubmit={onSubmit}>
        <label>
          Username
          </label>  
          <input type='text' name='name' value={name} onChange={handleChange} />
       
        <label>
         Email
         </label>
        <input type='text' name='email' value={email} onChange={handleChange} />
       
        <label>
         Password
         </label>
        <input type='password' name='password' value={password} onChange={handleChange} />
        
        <label>
         Password Confirmation
         </label>
        <input type='password' name='password_confirmation' value={password_confirmation} onChange={handleChange} />

         <label>
          Age
         </label>
         <input type='text' name='age' value={age} onChange={handleChange} />

         <label>
          Address
         </label>
         <input type='text' name='address' value={address} onChange={handleChange} />

         <label>Image</label>
         <input type='text' name='image' value={image} onChange={handleChange} />
       
        <input type='submit' value='Sign up!' />
      </Form>
      {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </div>
    )
}

export default SignUp
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