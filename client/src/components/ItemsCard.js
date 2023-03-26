import React from 'react'
import styled from 'styled-components'
import { Link , useParams} from 'react-router-dom';

const ItemsCard = ({dataObj:{image,description,rating,price,quantity,reviews},dataObj}) => {
console.log(dataObj)
 
const reviewLength = reviews.map((item) => (
  <li >
   {item.name} : {item.comments} 
  </li>
));

  return (
    <Card style={{ marginLeft: "20px"}}>
       <Link to={`/productions/${dataObj.id}`} > 
       <img style={{ width: "300px",
        height: "200px",
        padding: "15px",
        marging: "10px", marginRight: "2px"}} src={image} alt="img"/> 
       </Link>
       <h1>{description}</h1>
       <h3> ${price}</h3>
       <h3>Quantity : {quantity}</h3>
       <Link to={`/productions/${dataObj.id}`} > Rating :{reviewLength.length}</Link>
    </Card>
  )
}

export default ItemsCard

const Card = styled.div`
   background-color: AliceBlue;
   box-shadow: 4px 4px 8px 0px rgb(0, 0,0,0.2);
   display:inline-block;
   text-align:center
   text-decoration: none;
 
   h4{
    font-family: 'Dancing Script', cursive;
   }
   
   a {
    text-decoration: none;
  }

`
