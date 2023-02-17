import React from 'react'
import { Link , useParams} from 'react-router-dom';

const ItemsCard = ({dataObj:{image,description,rating,price,quantity},dataObj}) => {
  console.log(dataObj)
  // const {id} = useParams()
 
  return (
    <div>
       <Link to={`/productions/${dataObj.id}`} > <img style={{ width: 400}}src={image} alt="img"/> </Link>
       <h1>{description}</h1>
       <h3> ${price}</h3>
       <h3>Quantity : {quantity}</h3>
       <Link to={`/productions/${dataObj.id}`} > Rating :{rating}</Link>
    </div>
  )
}

export default ItemsCard



