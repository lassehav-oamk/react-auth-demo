import './App.css';
import LoginView from './LoginView';
import ProtectedView from './ProtectedView';
import SignupView from './SignupView';
import Home from './Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const jwtFromStorage = window.localStorage.getItem('appAuthData');

function App() {

  const [ userJwt, setUserJwt ] = useState(jwtFromStorage);

  let authRoutes = <>
                  <Route path="/login" element={ <LoginView login={(token) => {
                    window.localStorage.setItem('appAuthData', token);
                    setUserJwt(token);
                  }} /> } />
                  <Route path="/signup" element={ <SignupView /> } />
                </>

  if(userJwt != null) {
    authRoutes = <Route path="/protected" element={ <ProtectedView userJwt={ userJwt } logout={() => setUserJwt(null)}/> }/>
  }

  return (
      <div>
        <h1>React Router auth demo</h1>
        <div>Auth status: { userJwt != null ? "Logged in": "Not logged in" } </div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home userJwt={ userJwt } />} />
            {
              authRoutes
            }
            <Route path="*" element={<Home userjwt={ userJwt } />} />

          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
