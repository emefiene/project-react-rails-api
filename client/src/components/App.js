import React, { useState , useEffect } from "react"
import ItemContainer from "./ItemContainer"
import ReviewProducts from "./ReviewProducts"
import { Switch, Route} from "react-router-dom";
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

function App() {
  const [data, setData] = useState([])
  const [errors, setErrors] = useState(false)
  const [reviewData, setReviewData] = useState([])
  const [currentUser, setCurrentUser] = useState(false)
  const [userId, setUserId] = useState()
  const [userList, setUserList] = useState()
  const [render, setRender] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          updateUser(user);
          setUserId(user)
          fetchProduction()
        });
      }
    })
  },[])


  
   const fetchProduction = () => {
     fetch('/productions')
     .then(res => {
      if(res.ok){
        res.json().then(setData)
      }else {
        res.json().then(data => setError(data.error))
      }
     })
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
 

  // const updateReview = (patient) => setData(current =>
  //   setRender( [...current, patient])
    
  //  )

  const addProduction = (data) => setData(current => [data, ...current])

  const addReview = (data) => setReviewData(current => [data, ...current])

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

  // const removeProduction = (id) => setData(current => current.filter(p => p.id !== id)) 
  
  const deleteProduction = (id) => setData(current => current.filter(p => p.id !== id)) 

  const deleteReview = (id) => setReviewData(current => current.filter(p => p.id !== id)) 

  function handleDelete(id){
    console.log(id)
    //DELETE to `/productions/${params.id}`
    // fetch(`/productions/${params.id}`,{
    //   method:'DELETE',
    //   headers: {'Content-Type': 'application/json'}
    // })
    // .then(res => {
    //   if(res.ok){
    //     deleteProduction(res)
    //     history.push('/')
    //   } else {
    //     res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
    //   }
    // })
  }
  
  function handleDeleteReview(rev){
    console.log(rev)
    //DELETE to `/productions/${params.id}`

    // fetch(`/reviews/${reviewID}`,{
    //   method:'DELETE',
    //   headers: {'Content-Type': 'application/json'}
    // })
    // .then(res => {
    //   if(res.ok){
    //     console.log(res)
    //     // history.push('/')
    //   } else {
    //     res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
    //   }
    // })
  }


  if(errors) return <h1>{errors}</h1>
  if(error) return <h1>{error}</h1>
  if(loading) return <h1>Loading Pleasing</h1>
  return (
    <div>
     <GlobalStyle />
      <h1>Hello I'm here to make it happen, trust the process.</h1>
      <Navbar updateUser={updateUser}/>
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
      <Route  path='/user/:id/edit'>
      <EditUser updateUserInfor={updateUserInfor} userId={userId}/>
    </Route>
      <Route  path='/reviews/:id/edit'>
      <EditReview editReview={editReview} userId={userId} />
    </Route>
      <Route path='/productions/:id'>
          <ItemDetails reviewData={reviewData} handleDelete={handleDelete} handleDeleteReview={handleDeleteReview} userId={userId} />
      </Route>
      <Route path='/users/new'>
        <SignUp />
      </Route>
      <Route path='/users/:id'>
        <Users updateUser={updateUser}/>
      </Route>
      <Route path='/login'>
        <Login updateUser={updateUser}/>
      </Route>
      <Route path= '/reviews/:id'>
      <ReviewProducts userId={userId} addReview={addReview}/>
    </Route>
    <Route path="/users">
       <UsersContainer userList={userList} />
    </Route>
      </Switch>
  }
    
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