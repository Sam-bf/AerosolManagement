import React from 'react'
import { useSelector } from 'react-redux'

function DashboardPrep() {

  const user=useSelector((state)=>state.user)
console.log(user,"salem user")
  return (
    <div>
      <h1>Espace preparateur</h1>
      <h1>{user && user.name} { user && user.lastName}</h1>
      <h3>{user && user.email}</h3>
      
    </div>
  )
}

export default DashboardPrep
