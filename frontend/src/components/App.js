import React from 'react';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Header from './Header';

import LoginPage from '../pages/login';
import HomePage from '../pages/home';
import ViewProduct from '../pages/view_product';
import LocationPage from '../pages/location';
import PostPage from '../pages/post';
import SignUp from '../pages/signup';


function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route style={{ textDecoration: 'none', color: 'white' }} path="/" element={<HomePage/>}/>
      <Route style={{ textDecoration: 'none', color: 'white' }} path="/location" element={<LocationPage/>}/>
      <Route style={{ textDecoration: 'none', color: 'white' }} path="/login" element={<LoginPage/>}/>
      <Route style={{ textDecoration: 'none', color: 'white' }} path="/view" element={<ViewProduct/>}/>
      <Route style={{ textDecoration: 'none', color: 'white' }} path="/post" element={<PostPage/>}/>
      <Route style={{ textDecoration: 'none', color: 'white' }} path="/signup" element={<SignUp/>}/>

    </Routes>

    </Router>
  )
}

export default App;
