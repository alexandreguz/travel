import './App.css';
import {Routes, Route} from 'react-router-dom'
import React, { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div className="App">

      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Register/>} />
    </Routes>

    </div>
  );
}

export default App;
