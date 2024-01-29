import {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Dashboard() {
    const userRole=useSelector((state)=>state.users.user.role)
    console.log(userRole,"heeeeeeeeelo")
    const navigate=useNavigate()
    useEffect(()=>{   if (userRole && userRole == "Admin") 
    {
        navigate("/DashboardAdmin");
    } 
    else if  (userRole && userRole == "Master") 
    {
        navigate("/DashboardMaster");
    } 
    else if  (userRole && userRole == "Preparateur") 
    {
        navigate("/DashboardPrep");
    }
     else 
     {
        // Default route for other roles or users without a specific role
        navigate("/Home");
    }},[])
 
  return (
    <>
     hellooo
    </>
  )
}

export default Dashboard
