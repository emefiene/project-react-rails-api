import React from 'react'
import UsersCard from './UsersCard'

const UsersContainer = ({userList,deleteUser}) => {
  return (
    <div>
      {userList.map(( userObj, index) => <UsersCard userObj={userObj} deleteUser={deleteUser} key={index}/>)}
    </div>
  )
}

export default UsersContainer

