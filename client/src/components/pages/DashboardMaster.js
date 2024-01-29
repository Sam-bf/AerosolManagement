import React from 'react'
import { useSelector } from 'react-redux'
import AddPreparateur from './masterManagment/AddPreparateur'
import { Button } from 'reactstrap'
import './DashboardMaster.css'
import AddAppareil from './masterManagment/AddAppareil'
import ListAppareil from './masterManagment/ListAppareil'

function DashboardMaster() {

  const user=useSelector((state)=>state.user)

  return (
       // myBackground   background-image:url('/cropped-nebuliseur-main.jpg');height: 100vh;background-size: cover;background-position: center;
       
    <div className='myBackground'>
   
       
    
      <h1>Master SPACE</h1>
      <h1>{user && user.name} { user && user.lastName}</h1>
      <h3>{user && user.email}</h3>
      <section className='listeAjout'>
      <div className='listeAjoutPrep'>
      <AddPreparateur/>
      <Button>liste des preparateur</Button>
      </div>
      <div className='listeAjoutApp'>
      <AddAppareil/>
      <Button>Liste des appareils</Button>
      </div>
      </section>
    </div>
  )
}

export default DashboardMaster
