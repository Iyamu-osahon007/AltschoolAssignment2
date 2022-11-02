
import './App.css';
import About from './Component/About';
import Errorpage from './Component/Errorpage';
import Users from './Component/Users';
import Home from './Component/Home';
import React from 'react';
import { Routes, BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import { useEffect, useState } from "react";


function App() {
    return(
        <div>
           <h1>
           AltSchool Assignment 2 Solution
            </h1> 

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='About' element={ <About />} />
                <Route path='Users' element={ <Users />} />
                <Route path='*' element={ <Errorpage />} />
            
            
            </Routes>

        </div>
    );
};

export default App;
