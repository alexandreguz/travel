import './App.css';
import { Routes, Route } from 'react-router-dom'
import React, { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NewVacation from './components/NewVacation';
import Navbar from './components/NavBar';
import EditVacation from './components/EditVacations';

const App = () => {


  return (
    <div className="App">
      <Navbar />

      <div>
        <Routes>
          {
          // (!Autorized) && (
            <>
            <Route path="/registration" element={<Register />} />
            <Route path="/login" element={<Login />} />
            
            </>
          // )
          }
          {
          // Autorized && (
            <>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/addvacation" element={<NewVacation />} />
            <Route path="/editvacation/:id" element={<EditVacation />} />
            </>
          // )
          }


      </Routes>
      </div>
    </div>
  );
}

export default App;
