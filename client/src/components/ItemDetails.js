 import  { Link, useParams, useHistory } from 'react-router-dom'
 import {useEffect, useState} from 'react'


function ItemDetail({deleteProduction}) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState()
  const [errors, setErrors] = useState(false)
  const {id, description, image, price, rating, quantity, reviews, users} = data
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
          // data.map(res => setView(res))
          setLoading(false)
        })
      } else {
        // console.log('error')
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
      }
      // } else {
      //   res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      // }
    })
  }
 
  if(loading) return <h1>Loading</h1>
  if(errors) return <h1>{errors}</h1>

const reviewLength = reviews.map((item) => (
    <li >
     {item.name} : {item.comments} 
    </li>
  ));
const itemList = reviews.map((item) => (
  <li >
   {item.name} : {item.comments} 
  </li>
));

  return (
      <div style={{ marginLeft: "20px"}}>
          <div className='wrapper'>
            <div>
            <hr></hr>
              <img style={{ width: 550}} src={image}/>
              <h3>Description:</h3>
              <p>{description}</p>
              <h3>Price:</h3>
              <p>{price}</p>
              <h3>Quantity:</h3>
              <p  >{quantity}</p>
              <p>Rating:{reviewLength.length}</p>
              <Link to={`/reviews/${data.id}`} > <h3>****** Write Review ******</h3> </Link>
              <hr></hr>
              
              <h3>Reviews</h3>
              <hr></hr>
              
              <h3>{itemList}</h3>
              
              
             
            </div>
            
          </div>
      <button><Link to={`/productions/${id}/edit`}>Edit Production</Link></button>
      <button onClick={() => handleDelete(data)}>Delete Production</button>
      
      </div>
    )
  }

  export default ItemDetail
 