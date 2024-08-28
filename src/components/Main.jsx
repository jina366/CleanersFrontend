import React from "react";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import {
    Homepage,
    Navbar,
    Price,
    Status,
    Contact
} from './';

const Main = () => {
    return (
        <div id="main">
            <Navbar />
            <Routes>
                <Route path='/' element={<Homepage />}/>
                <Route path='/pricing' element={<Price />}/>
                <Route path='/checkStatus' element={<Status />}/>
                <Route path='/contact' element={<Contact />}/>
            </Routes>
        </div>
    )
}

export default Main