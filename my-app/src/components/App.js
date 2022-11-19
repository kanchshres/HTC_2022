import React from 'react';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Header from './Header';

import LoginPage from '../pages/login';
import HomePage from '../pages/home';


function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>

    </Router>
  )
}

export default App;
