import React ,{useState,Fragment}from 'react'
import {Navbar,NavbarBrand,Container,Nav,Collapse,NavbarToggler,NavItem,NavLink, Button} from "reactstrap"
import LoginModal from '../auth/LoginModal'
import RegisterModal from '../auth/RegisterModal'
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { logoutUser } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'
import './AppNavBar.css'
function AppNavBar() {
    const [isOpen,setIsOpen]=useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)

    }
    const user=useSelector((state)=>state.users.user)
console.log(user)
const dispatch=useDispatch()
const navigate=useNavigate()
const handleLogout=()=>{
    dispatch(logoutUser())
    navigate("/")

}
    const guestLinks = (
        
  //si on veut remettre register modal on refait tag NavItem component RegisterModal closingtagNavItem
            
          
          <NavItem>
            <LoginModal />
          </NavItem>
        
      );

      const authLinks = (
        <Fragment>

        <NavItem>
           
        <Link to="/Dashboard">
              <Button outline color="info"> 
              <strong>
              {user && `Welcome ${user.name} `}
              </strong>
              </Button>
              </Link>
         
        </NavItem>

        <NavItem>
                     <Button href="#" onClick={handleLogout} className="navbar-text mr-3"><strong >Logout</strong> </Button>
              </NavItem>

        <NavItem>         
              <span className="navbar-text mr-3">
              <Link to="/">
              <Button className="navbar-text mr-3" color='secondary'><strong >Home</strong> </Button>
              </Link>
              </span>
            
        </NavItem>
        </Fragment>
      );
  return (
    <div>
    <Navbar color="success" expand="sm" className="mb-5">
      <Container>
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          {user && user ? authLinks: guestLinks}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default AppNavBar
