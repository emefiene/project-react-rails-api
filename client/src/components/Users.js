import React from 'react'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'

const Users = () => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    
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
            
        </Card>
    )
}

export default Users

const Card = styled.div`

    background-color: #EFEFEF; 
 
  

`