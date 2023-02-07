import React, { useState , useEffect } from "react"
import ItemContainer from "./ItemContainer"
import ReviewProducts from "./ReviewProducts"
import { Switch, Route} from "react-router-dom";
import Navbar from "./Navbar";



function App() {

  const [data, setData] = useState([])
  const [reviewData, setReviewData] = useState([])

   useEffect( () => {
     fetch('/productions')
     .then(res => res.json())
     .then(data => {
       setData(data)
     })
   }, [])

   useEffect( () => {
    fetch('/users')
    .then(res => res.json())
    .then(data => {
      setReviewData(data)
    })
  }, [])

  return (
    <div>
      <h1>Hello I'm here to make it happen, trust the process.</h1>
      <Navbar/>
      
      <Switch>
      <Route exact path="/">
       <ItemContainer data={data} />
      </Route>
      <Route exact path="/reviews/:id">
       <ReviewProducts data={data} reviewData={reviewData} />
      </Route>
      </Switch>
      
    
    </div>
  );
}

export default App;
