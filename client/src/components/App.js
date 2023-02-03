import React, { useState , useEffect } from "react"
import ItemContainer from "./ItemContainer"
import ReviewProducts from "./ReviewProducts"
import { Switch, Route} from "react-router-dom";
import Navbar from "./Navbar";



function App() {

  const [data, setData] = useState([])
   useEffect( () => {
     fetch('/owners')
     .then(res => res.json())
     .then(data => setData(data))
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
       <ReviewProducts data={data} />
      </Route>
      </Switch>
      
    
    </div>
  );
}

export default App;
