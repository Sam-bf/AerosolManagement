import { useEffect } from 'react';
import './App.css';
import AppNavBar from './components/pages/AppNavBar';
import { Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home';
import { useDispatch,useSelector } from 'react-redux';
import { getAuthUser } from './redux/actions';
import DashboardAdmin from './components/pages/DashboardAdmin';
import DashboardMaster from './components/pages/DashboardMaster';
import Dashboard from './components/pages/Dashboard';
import DashboardPrep from './components/pages/DashboardPrep';
import ListAppareil from './components/pages/masterManagment/ListAppareil';
function App() {
  const dispatch=useDispatch()
  const getAuth=()=>{
  dispatch(getAuthUser())
  }
  useEffect(getAuth,[])
  const isAuth=useSelector((state)=>state.users.isAuth)
  return (
    <div className="App">
    <AppNavBar />
    {isAuth &&
    <Routes>
      <Route path="/DashboardAdmin" element={<DashboardAdmin/>} />
      <Route path="/DashboardMaster" element={<DashboardMaster/>}/>
      <Route path="/DashboardPrep" element={<DashboardPrep/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/DashboardMaster/ListAppareil" element={<ListAppareil/>} />
    </Routes>
        }
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    


    </div>
  );
}

export default App;
