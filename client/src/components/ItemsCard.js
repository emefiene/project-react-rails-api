import React from 'react'
import { Link , useParams} from 'react-router-dom';

const ItemsCard = ({dataObj:{image,description,rating,price,quantity},dataObj}) => {
  // // console.log(dataObj)
  // const {id} = useParams()
 
  return (
    <div>
       <img style={{ width: 400}}src={image} alt="img"/>
       <h1>{description}</h1>
       <h3> ${price}</h3>
       <Link to={`/productions/${dataObj.id}`} > Rating :{rating}</Link>
       <h3>Quantity : {quantity}</h3>
    </div>
  )
}

export default ItemsCard
