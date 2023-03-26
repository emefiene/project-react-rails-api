import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

function EditReview(editReview, currentUser) {
    const [formData, setFormData] = useState({
        comments:''
      })
    
      const [errors, setErrors] = useState([])
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    
  const {id} = useParams()
  useEffect(() => {
    fetch(`/reviews/${id}`)
    .then(res => res.json())
    .then(setFormData)
  },[])

  function onSubmit(e){
    e.preventDefault()
    //PATCH to `/productions/${id}`
    fetch(`/reviews/${id}`,{
      method:'PATCH',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({name:currentUser.name, ...formData, production_id:id, user_id:currentUser.id})
    })
    .then(res => {
      if(res.ok){
        res.json().then(editReview)
      } else {
        //Display errors
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      }
    })
  }
    return (
      <div className='App'>
      {errors?errors.map(e => <div>{e}</div>):null}
      <Form onSubmit={onSubmit}>
      <textarea type='text' rows='10' cols='100' name='comments' value={formData.comments} onChange={handleChange} />
        <input type='submit' value='Update Production' />
      </Form>
      {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
      </div>
    )
  }
  
  export default EditReview
  const Form = styled.form`
  display:flex;
  flex-direction:column;
  width: 400px;
  margin:auto;
  font-family:Arial;
  font-size:30px;
  input[type=submit]{
    background-color:#42ddf5;
    color: white;
    height:40px;
    font-family:Arial;
    font-size:30px;
    margin-top:10px;
    margin-bottom:10px;
  }
  `