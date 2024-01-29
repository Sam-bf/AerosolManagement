import React ,{useState}from 'react'
import {Alert,Modal,ModalBody,ModalHeader,ModalFooter,Button,InputGroup,InputGroupText,Input} from "reactstrap"
import { loginUser, registeUser } from '../../redux/actions'
import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import './LoginModal.css'
function LoginModal() {
  const[modal,setModal]=useState(false)
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const toggle=()=>{
    setModal(!modal)
  }
  const errors=useSelector((state)=>state.err)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogin=()=>{
    const formdata={email,password}
    dispatch(loginUser(formdata,navigate))


  }
  return (
    <div>
         <Button color='primary' onClick={toggle}>
Connection</Button>

      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader className='modHead'Backgro toggle={toggle}>Connection</ModalHeader>
        <ModalBody className='modBody'>
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
          <Button color="primary" onClick={handleLogin}>
Connectez-vous</Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>

    </div>
  )
}

export default LoginModal


