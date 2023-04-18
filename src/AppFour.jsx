// import { useState, useEffect } from "react";
import Dogs from "pages/Dogs";
import Home from "pages/Home";
import DogDetails from "pages/DogDetails";
import { Route, Routes } from "react-router-dom";
import { Layout } from "Layout";

export default function AppFour(){
    return (
      
   
           
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>} />
                        <Route path="dogs" element={<Dogs/>} />
                        <Route path="dogs/:dogId" element={<DogDetails/>} />
                    </Route>
                </Routes>
        
            
    );  
};

    
