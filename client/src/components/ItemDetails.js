 import  { Link, useParams, useHistory } from 'react-router-dom'
 import {useEffect, useState} from 'react'


function ItemDetail({deleteProduction, deleteRev}) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)
  const {id, description, image, price, quantity, reviews, users} = data
  console.log(id)
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
        res.json().then(data => setErrors(data.error))
      }
    })
  },[])
  
  function handleDelete(){
    fetch(`/productions/${params.id}`,{
      method:'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      if(res.ok){
        deleteProduction(id)
        history.push('/')
      }
      // } else {
      //   res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      // }
    })
  }
 
  if(loading) return <h1>Loading</h1>
  if(errors) return <h1>{errors}</h1>

const reviewLength = reviews.map((item) => (
    item.comments
    
  ));
const itemList = reviews.map((item) => (
  <li style={{width: 1700, height: 70}}>
   {item.name} : {item.comments} 
  </li>
));


  return (
      <div style={{ marginLeft: "20px"}}>
          <div className='wrapper'>
            <div>
            <hr></hr>
            <p style={{color: "blue"}}>Rating:{reviewLength.length}</p>
              <img style={{ width: 550}} src={image}/>
              <h3>Description:</h3>
              <h4>{description}</h4>
              <h3>Price:</h3>
              <p>{price}</p>
              <h3>Quantity:</h3>
              <p  >{quantity}</p>
              
              <Link to={`/reviews/${data.id}`} > <h3>****** Write Review ******</h3> </Link>
              <hr></hr>
    
              
              <hr></hr>
              <h2>Reviews</h2>
              
              <h3>{itemList}</h3>
              
              
             
            </div>
            
          </div>
      <button><Link to={`/productions/${id}/edit`}>Edit Production</Link></button>
      <button onClick={() => handleDelete(data)}>Delete Production</button>
      
      </div>
    ) 
  }

  export default ItemDetail
 