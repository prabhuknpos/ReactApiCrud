import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import User from './components/User';
import UserCreate from './components/UserCreate';
import UserUpdate from './components/UserUpdate';

const App = () => {
  return (
    <div className='App'>
      <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<User></User>}></Route>
     <Route path='/create' element={<UserCreate></UserCreate>}></Route>
    <Route path='/update/:id' element={<UserUpdate></UserUpdate>}></Route>
     </Routes>
    </div>
  )
}

export default App