import React from 'react';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Header from './Header';
import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';
import View from '../pages/View';
import LocationPage from '../pages/Location';
import PostPage from '../pages/Post';
import SignUp from '../pages/Signup';

function App() {
  return (
    <Router forceRefresh={true}>
    <Header />
<<<<<<< HEAD
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route path="/location" element={<LocationPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/view" element={<View/>}/>
      <Route path="/post" element={<PostPage/>}/>
      <Route path="/signup" element={<SignUp/>}/>

    </Routes>

=======
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/location" element={<LocationPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/view" element={<ViewProduct/>}/>
        <Route path="/post" element={<PostPage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
>>>>>>> 635de40bf69b8aa65f3c9e6c0533a8434714ab09
    </Router>
  )
}

export default App;
