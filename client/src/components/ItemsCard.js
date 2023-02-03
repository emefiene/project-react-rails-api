import React from 'react'
import { Link , useParams} from 'react-router-dom';

const ItemsCard = ({dataObj:{image,name,rating,price,quantity},dataObj}) => {
  // // console.log(dataObj)
  // const {id} = useParams()
 
  return (
    <div>
       <img style={{ width: 400}}src={image} alt="img"/>
       <h1>{name}</h1>
       <h3> ${price}</h3>
       <Link to={`reviews/${dataObj.id}`} > Rating :{rating}</Link>
       <h3>Quantity : {quantity}</h3>
    </div>
  )
}

export default ItemsCard
