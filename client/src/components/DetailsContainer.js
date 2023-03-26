
import ItemDetail from "./ItemDetails"

function DetailsContainer({deleteProduction, reviewData, deleteReview}) {

  return (
      <div>
      {reviewData.map(( reviewDataObj, index) => <ItemDetail reviewDataObj={reviewDataObj} deleteProduction={deleteProduction} deleteReview={deleteReview} key={index}/>)}
      </div>
    )
  }

  export default DetailsContainer
