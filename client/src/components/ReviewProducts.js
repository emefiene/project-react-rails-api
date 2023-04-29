import React, { useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'

function ReviewProducts ({addNewReviewlist, currentUser}) {
console.log("USER", currentUser)
  const params = useParams()
  const history = useHistory()
  const [formData, setFormData] = useState({
    comments:''
  })
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function onSubmit(e){
    e.preventDefault()
    fetch('/reviews',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({name:currentUser.name, ...formData, production_id:params.id})
    })
    .then(res => {
      if(res.ok){
        res.json().then(data => addNewReviewlist(data))
        history.push(`/productions/${params.id}`)
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
      
      <label>Write Review</label>
      <textarea type='text' name='comments' cols='1000' rows='15'  value={formData.comments} onChange={handleChange} />
      <input type='submit' value='Submit Review' />
    </Form>
    {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
      </div>
    );
  }
  
  export default ReviewProducts;
  
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

  .sub:hover {
    box-shadow: 0 0 10px #0099ff;
    font-weight: bold;
    color: black;
    
}
  `

