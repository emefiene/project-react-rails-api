 import  { Link, useParams, useHistory } from 'react-router-dom'
 import {useEffect, useState} from 'react'


function ItemDetail({ reviewData, handleDelete,handleDeleteReview}) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState()
  const [errors, setErrors] = useState(false)
  const {id, description, image, price, rating, quantity, reviews, users} = data
  // console.log(reviewData)
  const params = useParams()
  // console.log(reviewData)
  // const {name} = userId
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
  
  
  
  //  const review = reviewData.map(res => {
  //   if(params.id == res.production_id){
  //     return <li>{res.comments}</li>
  //   }

  // })
 
  

  if(loading) return <h1>Loading</h1>
  if(errors) return <h1>{errors}</h1>
   
  // const userID = userId.map(res => console.log(res))
  


// console.log(reviewID)
// const reviewID = reviews.map(res => res.id)


const itemList = reviews.map((item) => (
  <li >
   {item.name} : {item.comments} 
  </li>
));

//  const rev = reviews.map(re => console.log("re", re))
  // const {name, comments} = reviews
  // console.log(comments)
  // const name = reviews.map(res => res.name)
  // console.log(data)
//   console.log(cast_members)
  //Place holder data, will be replaced in the assosiations lecture. 
  // const crew_members = ['Lily-Mai Harding', 'Cathy Luna', 'Tiernan Daugherty', 'Giselle Nava', 'Alister Wallis', 'Aishah Rowland', 'Keiren Bernal', 'Aqsa Parrish', 'Daanyal Laing', 'Hollie Haas']
  return (
      <div>
          <div className='wrapper'>
            <div>
            <Link to={`/reviews/${data.id}`} > ****** Write Review ****** :{rating}</Link>
              <img style={{ width: 400}} src={image}/>
              <h3>Description:</h3>
              <p>{description}</p>
              <h3>Price:</h3>
              <p>{price}</p>
              <h3>Quantity:</h3>
              <p  >{quantity}</p>
              <hr></hr>
              <h3>...Reviews...</h3>
              <hr></hr>
              <h3 onClick={() => handleDeleteReview(reviews)}>{itemList}</h3>
              
              
             
            </div>
            
          </div>
      <button><Link to={`/productions/${id}/edit`}>Edit Production</Link></button>
      <button onClick={() => handleDelete(data)}>Delete Production</button>
      
      </div>
    )
  }

  // <Link to={`/reviews/${id}/edit`}></Link>
  export default ItemDetail
  // <button><Link to={`/reviews/${id}/edit`}>Edit Production</Link></button>