import React from 'react'
import { useSelector } from 'react-redux'
import AddMaster from './masterManagment/AddMaster'

function DashboardAdmin() {

  const user=useSelector((state)=>state.user)

  return (
    <div>
      <h1>Admin SPACE</h1>
      <h1>{user && user.name} { user && user.lastName}</h1>
      <h3>{user && user.email}</h3>
      <AddMaster />
    </div>
  )
}

export default DashboardAdmin
