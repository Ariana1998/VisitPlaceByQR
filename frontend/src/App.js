import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes, useNavigate } from 'react-router-dom';
import LogIn from './components/loginComponents/LogIn';
import RegisterUser from './components/loginComponents/RegisterUser';
import { ProtectedRoutes } from '.components/ProtectedRoutes';
import Navigator from '.components/Navigator';
function App() {
  const [isLogged, setLogged] = useState(false)
  const navigate = useNavigate();
  return (
    <div> 
      <Routes>
        <Route index element={<div><LogIn isLogged={isLogged} setLogged={setLogged} navigate={navigate}/></div>}/>
        <Route path='/registro' element={<div><RegisterUser/></div>}/>
        <Route element={<ProtectedRoutes isLogged={localStorage.getItem('isLogged')}/>}>
          <Route element={<Navigator setLogged={setLogged} navigate={navigate}/>}>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}


export default App;

