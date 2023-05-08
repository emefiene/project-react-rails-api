import React from 'react'
import { useEffect, useState } from 'react'
import {useParams, useHistory} from 'react-router-dom'
import styled from 'styled-components'

const Users = ({currentUser, updateUser}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    const [showResults, setShowResults] = useState(false)

    const onClick = () => setShowResults(true)

    const params = useParams()
    const {id} = params
    const history = useHistory()
    useEffect(()=>{
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setUser(user)
                    setLoading(false)
                })
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })
       
    },[])
    
    
    const Results = () => {
       return user.productions.map(res => <li>{res.description}</li>)
    }
    

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>
    return (
        <Card style={{ marginLeft: "20px"}}>
        <h1 style={{textAlign: "center", color:"blue"}}> Welcome {user.name}</h1>
        <hr></hr>
            <h3>Name: {user.name}</h3>
            <img style={{ width: 550}} src={user.image} alt="logo" />
            <h3>Age: {user.age}</h3>
            <h3>Email: {user.email}</h3>
            <h3>Address:{user.address}</h3>
            <button onClick={onClick} style={{textAlign: "center", color:"blue"}}> View Your Productions</button>
             {showResults ? <Results /> : null }
            
        </Card>
    )
}

export default Users

const Card = styled.div`

    background-color: #EFEFEF; 
 
  

`