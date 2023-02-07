import { useParams , useHistory } from 'react-router-dom'


const ReviewProducts = ({data, reviewData}) => {
  
 console.log(reviewData)

  const {id} = useParams()
  

  
  return (
    
   <div>
   {data.map(res => {
     if(res.id == id){
      return <p> <img style={{ width: 400}} src={res.image} alt="logo"/> 
       <h3> Quantity: {res.quantity}</h3> <h3> Description: {res.description}</h3> 
       <h3> Rating: {res.rating}</h3> <h3> Price: {res.price}</h3> </p>
       
     }
   })}
      <hr>
      </hr>

      {
        reviewData.map(( res, index) => { 
          if(res.id == id){
            return <h3>{res.name}</h3> 
          }
        })
      }
      
      {
         reviewData.map(res => res.reviews.map(res => {
          if(res.user_id == id){
            return (
              <div>
              <img src={res.image} alt="logo"/>
              {res.time}
              <li>{ res.comments }</li>
              </div>)
            }
        
        }))
      }
     

   </div>
    
    
  )

  
}

export default ReviewProducts