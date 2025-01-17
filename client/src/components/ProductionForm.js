import React, { useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'

function ProductionForm({addProduction}) {
  const [formData, setFormData] = useState({
    image:'',
    description:'',
    price:'',
    quantity:''
  })

  const [errors, setErrors] = useState([])
  const {id} = useParams()
  const history = useHistory()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function onSubmit(e){
    e.preventDefault()
    
    fetch('/productions',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({...formData})
    })
    .then(res => {
      if(res.ok){
        res.json().then(addProduction)
        history.push("/")
      } else {
        //Display errors
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      }
    })
  }
    return (
      <div className="App">
      {errors?errors.map(e => <div>{e}</div>):null}
      <Form onSubmit={onSubmit}>
      <label>Image</label>
      <input type='text' name='image' value={formData.image} onChange={handleChange} />
       
      <label>Description</label>
      <textarea type='text' rows='4' cols='50' name='description' value={formData.description} onChange={handleChange} />

      <label> Price</label>
      <input type='number' name='price' value={formData.price} onChange={handleChange} />
    
      <label>Quantity</label>
      <input type='number' name='quantity' value={formData.quantity} onChange={handleChange} />
    
      <input type='submit' value='Create Production' />
    </Form>
    {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
      </div>
    );
  }
  
  export default ProductionForm;
  
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