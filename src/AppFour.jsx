// import { useState, useEffect } from "react";
import Dogs from "pages/Dogs";
import Home from "pages/Home";
import { NavLink, Route, Routes } from "react-router-dom";

export default function AppFour(){
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/">Домашня сторінка</NavLink></li>
                    <li><NavLink to="/dogs">Колекція</NavLink></li>

                
                
                </ul>
            </nav>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/dogs" element={<Dogs/>} />
                    <Route path="/dogs/:dogId" element={<div> Елемент колекції</div>} />
                </Routes>
        </div>
    );  
};

    
