import './App.css';
import {Routes, Route} from 'react-router-dom'
import React, { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NewVacation from './components/NewVacation';
import Navbar from './components/NavBar';
import EditVacation from './components/EditVacations';

function App() {
  const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Register/>} />
      <Route path="/addvacation" element={<NewVacation/>}/>
      <Route path="/editvacation/:id" element={<EditVacation/>}/>

    </Routes>

    </div>
  );
}

export default App;
