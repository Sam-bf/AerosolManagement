import { useState } from 'react';
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ajoutApp } from '../../../redux/actionsAppareil';
import { Button } from 'reactstrap'

function AddAppareil() {
    
    const[Marque,setMarque]=useState("")
    const[Model,setModel]=useState("")
    const[Référence,setRéférence]=useState("")
    const[DateOuverture,setDateOuverture]=useState("")
    let[isOpen,setIsOpen]=useState(false)
const handleModal=()=>{
  setIsOpen(!isOpen)
}
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleSubmit=()=>{
        const newAerosol={Marque,Model,Référence,DateOuverture}
dispatch(ajoutApp(newAerosol,navigate))
//jai des doutes sur la fonction a importer de redux celle la ou AddAppareil
handleModal()
navigate("/ListAppareil")
    }
  return (
    <div >
<Button onClick={handleModal}>Ajouter appareil</Button>
      <ReactModal
style={{width:"200px",height:"500px"}}
isOpen={isOpen}
>
    <label>Marque</label>
    <input onChange={(e)=>setMarque(e.target.value)}/>
    <label>Modal</label>
    <input onChange={(e)=>setModel(e.target.value)}/>
    <label>Référence</label>
    <input onChange={(e)=>setRéférence(e.target.value)}/>
    <label>DateOuverture</label>
    <input onChange={(e)=>setDateOuverture(e.target.value)}/>
    <button onClick={handleSubmit}>Ajouter</button>
    <button onClick={handleModal}>Fermer</button>
    
</ReactModal>
    </div>
  )
}

export default AddAppareil