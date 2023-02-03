import React from 'react'
import ItemsCard from "./ItemsCard"

const ItemContainer = ({data}) => {
  return (
   <div>
      {data.map(( dataObj, index) => <ItemsCard dataObj={dataObj} key={index}/>)}
   </div> 
  )
}

export default ItemContainer