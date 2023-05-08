import React from 'react'
import UsersCard from './UsersCard'

const UsersContainer = ({userList,deleteUser,updateUser}) => {
  return (
    <div>
      {userList.map(( userObj, index) => <UsersCard userObj={userObj} updateUser={updateUser} deleteUser={deleteUser} key={index}/>)}
    </div>
  )
}

export default UsersContainer

