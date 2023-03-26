import React from 'react'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const Users = () => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    
    const params = useParams()
    const {id} = params
    // window.location.reload();
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
        <div>
        <h1>{user.name}</h1>
            <img src={user.image} alt="logo" />
            <h1>{user.age}</h1>
            <h1>{user.address}</h1>
            
        </div>
    )
}

export default Users