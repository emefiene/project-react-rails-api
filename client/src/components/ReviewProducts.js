import { useParams , useHistory } from 'react-router-dom'


const ReviewProducts = ({data}) => {
  

  const {id} = useParams()
 
  data.map(res => {
    if(res.id == id){
      console.log(res.image)
    }
  })

  return (
    <div>
    
   <p>{data.map(res => {
     if(res.id == id){
      return <p> <img style={{ width: 400}} src={res.image} alt="logo"/>  <h3> Quantity: {res.quantity}</h3> <h3> Description: {res.description}</h3> <h3> Rating: {res.rating}</h3> <h3> Price: {res.price}</h3></p>
     }
   })}</p>
    
    </div>
  )
}

export default ReviewProducts