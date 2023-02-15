// import { useEffect, useState } from 'react'
// import { useParams , useHistory } from 'react-router-dom'


// const ReviewProducts = () => {
//    const [data, setData] = useState([])

//    const params = useParams()

//    useEffect(() => {
//     fetch(`/productions/${params.id}`)
//     .then(res => res.json())
//     .then(json => setData(json))
//    }, [])

//    const {id, description, image, price, rating, quantity, reviews, users} = data
   
//   return (
//    <div>
//    <div>
//      <img style={{ width: 400}}src={image} alt="img"/>
//      <h3>{description}</h3>
//      <h3>{price}</h3>
//      <h3>{quantity}</h3>
     
     
     
     
//    </div> 

//    </div>
    
//   )

  
// }

// export default ReviewProducts


