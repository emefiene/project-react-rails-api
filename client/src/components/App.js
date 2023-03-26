import React, { useState , useEffect } from "react"
import ItemContainer from "./ItemContainer"
import ReviewProducts from "./ReviewProducts"
import { Switch, Route, useParams} from "react-router-dom";
import ProductionForm from "./ProductionForm";
import EditForm from "./EditForm"
import ItemDetails from "./ItemDetails"
import Navbar from "./Navbar";
import {createGlobalStyle} from 'styled-components'
import SignUp from "./SignUp";
import Users from "./Users";
import Login from "./Login";
import EditReview from "./EditReview";
import UsersContainer from "./UsersContainer";
import EditUser from "./EditUser";
import Search from "./Search";
import Footer from "./Footer";


function App() {
  const [data, setData] = useState([])
  const [errors, setErrors] = useState(false)
  const [reviewData, setReviewData] = useState([])
  const [currentUser, setCurrentUser] = useState(false)
  const [userId, setUserId] = useState([])
  const [userList, setUserList] = useState([])
  const [items, setItems] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          updateUser(user);
          console.log("u", user)
          setUserId(user)
          fetchProduction()
          setLoading(false)
          
        });
      }
    })
  },[])
   

  console.log("current", currentUser)

  
   const fetchProduction = () => {
     fetch('/productions')
     .then(res => {
      if(res.ok){
        res.json().then(setData)
      }else {
        
        res.json().then(data => setError(data.error))
      }
     }, [])
   }

   useEffect( () => {
    fetch('/reviews')
    .then(res => res.json())
    .then(data => {
      setReviewData(data)
    })

    
  }, [])
 
  useEffect( () => {
    fetch('/allUsers')
    .then(res => {
      if(res.ok){
        res.json().then(data => {
          setUserList(data)
          setItems(data)
        })
        
      }else {
        res.json().then(data => setErrors(data.error))
      }
     })
    //  use setTimeout to mount and cleanup
     setTimeout(() => {
      setLoading(false);
    }, 100);
  }, [])
 
 

  const addProduction = (data) => setData(current => [data, ...current])

  const addReview = (data) => setReviewData(current => [data, ...current])

  const addUser = (data) => setUserList(current => [data, ...current])

  const editProduction = (editProduction) => setData(current => {
    return current.map(data => {
     if(data.id === editProduction.id){
       return editProduction
     } else {
       return data
     }
    })
  })
   
  const editReview = (editReview) => setReviewData(current => {
    return current.map(data => {
     if(data.id === editReview.id){
       return editReview
     } else {
       return data
     }
    })
  })

  const updateUserInfor = (updateUserInfor) => setUserList(current => {
    return current.map(data => {
     if(data.id === updateUserInfor.id){
       return updateUserInfor
     } else {
       return data
     }
    })
  })
  
  const updateUser = (user) => setCurrentUser(user)

  
  const deleteProduction = (id) => setData(current => current.filter(p => p.id !== id)) 

  const deleteUser = (id) => setUserList(current => current.filter(p => p.id !== id)) 

  const handleSearch = (e) => {
    const filterSearch = items.filter(itemObj => {
      return itemObj.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
   setUserList(filterSearch)
  }


  if(errors) return <h1>{errors}</h1>
  if(error) return <h1>{error}</h1>
  if(loading) return <h1>Loading Pleasing</h1>
  return (
    <div>
     <GlobalStyle />
      <h1 style={{textAlign: "center"}}><strong>Favorites</strong></h1>
      
      <Navbar updateUser={updateUser}/>
      <Route path='/users/new'>
      <SignUp  addUser={addUser}/>
      </Route>
    
      { !currentUser? <Login error={'please login'} updateUser={updateUser} /> :
      
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
    
      <Route  path='/reviews/:id/edit'>
      <EditReview editReview={editReview} currentUser={currentUser} userId={userId} />
    </Route>
      <Route path='/productions/:id'>
          <ItemDetails reviewData={reviewData} deleteProduction={deleteProduction} />
      </Route>
     
      <Route path='/users/:id'>
        <Users updateUser={updateUser}/>
      </Route>
      <Route path='/login'>
        <Login updateUser={updateUser}/>
      </Route>
      <Route path= '/reviews/:id'>
      <ReviewProducts currentUser={currentUser} userId={userId} addReview={addReview}/>
    </Route>
    <Route  path='/user/:id/edit'>
    <EditUser updateUserInfor={updateUserInfor} currentUser={currentUser} userId={userId}/>
  </Route>

  <Route path="/users">
  <Search handleSearch={handleSearch}/>
  <UsersContainer deleteUser={deleteUser} userList={userList}
  />
  
</Route>
      </Switch>
  }
  <hr></hr>
  <Footer/>
    </div>
  );
}

export default App;
const GlobalStyle = createGlobalStyle`
    body{
      margin:0;
     background-color: #EFEFEF; ; 
      color:black
    }
    
    
    `

