import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import CreateMovie from './components/CreateMovie';
import './Router.css';
import { useState } from 'react';
import { Home } from './components/Home';
import { signOut } from 'firebase/auth';
import { auth } from './config/firebase';
export default function App() {
  const [isAuth,setIsAuth] = useState(false);
  const logout = () => {
    signOut(auth).then(() =>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login';
  });
};
  return (
    <Router>
        <nav>
            {!isAuth ? <Link to='/login' onClick={logout}>Login</Link> : <Link>Log Out</Link>}
            <Link to='/createmovie'>Create Movie</Link>
            <Link to ='/'>Home</Link>
        </nav>
        <Routes>
          <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
          <Route path='/createmovie' element={<CreateMovie />} />
          <Route path='/' element={<Home/>}/>
        </Routes>
    </Router>
  )
}
