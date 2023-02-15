import  { Link, useParams, useHistory } from 'react-router-dom'
import {useEffect, useState} from 'react'


function ProductionDetail({deleteProduction}) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)
  
  const params = useParams()
  const history = useHistory()
  useEffect(()=>{
    //GET to '/productions/:id'
    fetch(`/productions/${params.id}`)
    .then(res => { 
      if(res.ok){
        res.json().then(data => {
          setData(data)
          setLoading(false)
        })
      } else {
        console.log('error')
        res.json().then(data => setErrors(data.error))
      }
    })
  },[])

  function handleDelete(){
    //DELETE to `/productions/${params.id}`
    fetch(`/productions/${params.id}`,{
      method:'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      if(res.ok){
        deleteProduction(id)
        history.push('/')
      } else {
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      }
    })
  }

//   const handleBuy = () => {
//     fetch(`/tickets`,{
//       method:'POST',
//       headers: {'Content-Type': 'application/json'},
//       body:JSON.stringify({production_id:id, user_id:1, price:30.50})
//     })
//     .then(res => {
//       if(res.ok){
//         history.push('/users/1')
//       } else {
//         res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
//       }
//     })
//   }

  
  
 
  if(loading) return <h1>Loading</h1>
  if(errors) return <h1>{errors}</h1>

  const {id, description, image, price, rating, quantity, reviews, users} = data
//   console.log(cast_members)
  //Place holder data, will be replaced in the assosiations lecture. 
  // const crew_members = ['Lily-Mai Harding', 'Cathy Luna', 'Tiernan Daugherty', 'Giselle Nava', 'Alister Wallis', 'Aishah Rowland', 'Keiren Bernal', 'Aqsa Parrish', 'Daanyal Laing', 'Hollie Haas']
  return (
      <div>
          <div className='wrapper'>
            <div>
              
              <img style={{ width: 400}} src={image}/>
              <h3>Description:</h3>
              <p>{description}</p>
              <h3>Price:</h3>
              <p>{price}</p>
              <h3>Quantity:</h3>
              <p>{quantity}</p>
            </div>
            
          </div>
      <button><Link to={`/productions/${id}/edit`}>Edit Production</Link></button>
      <button onClick={handleDelete}>Delete Production</button>
      
      </div>
    )
  }

  
  export default ProductionDetail