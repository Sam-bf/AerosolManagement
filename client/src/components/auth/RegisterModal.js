import React ,{useState}from 'react'
import {Alert,Modal,ModalBody,ModalHeader,ModalFooter,Button,InputGroup,InputGroupText,Input} from "reactstrap"
import { registeUser } from '../../redux/actions'
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import './RegisterModal.css'
function RegisterModal() {
  const[modal,setModal]=useState(false)
  const[email,setEmail]=useState("")
  const[name,setName]=useState("")
  const[lastName,setLastName]=useState("")
  const[password,setPassword]=useState("")

  const toggle=()=>{
    setModal(!modal)
  }
  const dispatch=useDispatch()
  const navigate=useNavigate()
const isAuth=useSelector((state)=>state.isAuth)
  const errors=useSelector((state)=>state.err)
console.log(errors,"errorsVerif")
console.log(isAuth,"isAuthVerif")
  const handleRegister=()=>{
     
    const formdata={name,email,password,lastName}
    dispatch(registeUser(formdata,navigate))

 if (isAuth ===true){
toggle()
 }

  }

  //si utilisation css button sinon color='success'

  return (
    <div>
         <Button color='secondary' onClick={toggle}>
Inscription      </Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader className='modHead' toggle={toggle}>Inscrivez-vous</ModalHeader>
        <ModalBody className='modBody'>

          <InputGroup>
    <Input placeholder="Prénom" onChange={(event)=>setName(event.target.value)} />
  </InputGroup>
  <InputGroup>
    <Input placeholder="Nom" onChange={(event)=>setLastName(event.target.value)}/>
  </InputGroup>
  <InputGroup>
    <Input placeholder="Email" onChange={(event)=>setEmail(event.target.value)} />
    <InputGroupText>
      @example.com
    </InputGroupText>
  </InputGroup>
  <InputGroup>
    <Input 
    type='password'
    placeholder="Mot de passe" 
    onChange={(event)=>setPassword(event.target.value)}/>
  </InputGroup>
  <InputGroup>


{errors && (
                <Alert color="danger">
                  {errors.map((err) => (
                    <div >{err.msg}</div>
                  ))}
                </Alert>
              )}
</InputGroup> 
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleRegister}>
            Enregistrer
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>

    </div>
  )
}

export default RegisterModal
