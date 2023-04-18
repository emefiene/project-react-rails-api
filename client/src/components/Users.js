import React from 'react'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'

const Users = ({currentUser}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(true)

    const {productions} =  currentUser
    const params = useParams()
    const {id} = params
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
       return  Array.from(new Set(productions.map(res => <li>{res.description}</li>)))
    }
    
    // const Results = () => {
    //     [...new Set(productions.map(res => res.description))]
    // }
    
    // const unique = [...new Set(data.map(item => item.group))]
    // console.log(currentUser)
    // console.log(currentUser)
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
            <h3>Address:c{user.address}</h3>
            <h3 onClick={onClick}> View </h3>
            {showResults ? <Results /> : null }
            
        </Card>
    )
}

export default Users

const Card = styled.div`

    background-color: #EFEFEF; 
 
  

`