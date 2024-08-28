import React from "react";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import {
    Homepage,
    Navbar,
} from './';

const Main = () => {
    return (
        <div id="main">
            <Navbar />
            <Routes>
                <Route path='/' element={<Homepage />}/>
            </Routes>
        </div>
    )
}

export default Main