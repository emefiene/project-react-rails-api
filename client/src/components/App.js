import React, { useState , useEffect } from "react"
import ItemContainer from "./ItemContainer"
import ReviewProducts from "./ReviewProducts"
import { Switch, Route} from "react-router-dom";
import ProductionForm from "./ProductionForm";
import EditForm from "./EditForm"
import ItemDetails from "./ItemDetails"
import Navbar from "./Navbar";
import {createGlobalStyle} from 'styled-components'


function App() {

  const [data, setData] = useState([])
  const [errors, setErrors] = useState(false)
  const [reviewData, setReviewData] = useState([])
  // const [render, setRender] = useState([])
  

   useEffect( () => {
     fetch('/productions')
     .then(res => {
      if(res.ok){
        res.json().then(setData)
      }else {
        res.json().then(data => setErrors(data.error))
      }
     })
   }, [])

   useEffect( () => {
    fetch('/reviews')
    .then(res => res.json())
    .then(data => {
      setReviewData(data)
    })
  }, [])

  // const updateReview = (patient) => setData(current =>
  //   setRender( [...current, patient])
    
  //  )

  const addProduction = (data) => setData(current => [data, ...current])

  //  function newProduction(data){
  //   fetch('/productions',{
  //     method:'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body:JSON.stringify(data)
  //   })
  //   .then(res => res.json())
  //   .then(res => {
  //     if(res.errors){

  //     } else {
  //       setErrors([...data,res])
  //     }
  //   })
  // }

  const editProduction = (editProduction) => setData(current => {
    return current.map(data => {
     if(data.id === editProduction.id){
       return editProduction
     } else {
       return data
     }
    })
  })
  
  const removeProduction = (id) => setData(current => current.filter(p => p.id !== id)) 
  
  const deleteProduction = (id) => setData(current => current.filter(p => p.id !== id)) 

  if(errors) return <h1>{errors}</h1>

  return (
    <div>
     <GlobalStyle />
      <h1>Hello I'm here to make it happen, trust the process.</h1>
      <Navbar/>
      
      <Switch>
      <Route exact path="/">
       <ItemContainer data={data} />
      </Route>
      <Route exact path="/productions/new">
      <ProductionForm addProduction={addProduction} />
      </Route>
      <Route  path='/productions/:id/edit'>
        <EditForm editProduction={editProduction} />
      </Route>
      <Route path='/productions/:id'>
          <ItemDetails reviewData={reviewData} deleteProduction={deleteProduction} />
      </Route>
      </Switch>
      
    
    </div>
  );
}

export default App;
const GlobalStyle = createGlobalStyle`
    body{
      background-color: black; 
      color:white;
    }
    `
