// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Experience from './Experience';
import About from './About';
import Navbar from './Components/Navbar/Navbar';

import Skills from './Skills';
import './App.css'



const App = () => (

  <><div>

    <BrowserRouter>
      <Navbar />
      <Routes>


        <Route path="/" Component={Home} />
        <Route path="/experience" Component={Experience} />
        <Route path="/skills" Component={Skills} />
        <Route path="/contact" Component={Contact} />
       
      </Routes>
    </BrowserRouter>
  </div>


  </>

);

export default App;
