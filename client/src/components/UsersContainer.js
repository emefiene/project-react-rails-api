import React from 'react'
import UsersCard from './UsersCard'

const UsersContainer = ({userList}) => {
  return (
    <div>
     {userList.map(( userObj, index) => <UsersCard userObj={userObj} key={index}/>)}
    </div>
  )
}

export default UsersContainer
