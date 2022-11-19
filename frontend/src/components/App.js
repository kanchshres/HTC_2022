import React from 'react';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Header from './Header';
import LoginPage from '../pages/Login';
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
      <Route exact path="/" element={<HomePage/>}/>
      <Route path="/location" element={<LocationPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/view" element={<ViewProduct/>}/>
      <Route path="/post" element={<PostPage/>}/>
      <Route path="/signup" element={<SignUp/>}/>

    </Routes>

    </Router>
  )
}

export default App;
