// import { useState, useEffect } from "react";
import { Suspense } from "react";
import { lazy } from "react";
// import Dogs from "pages/Dogs";
// import Home from "pages/Home";
// import DogDetails from "pages/DogDetails";
// import { Gallery } from "components/Gallery";
import { Route, Routes } from "react-router-dom";
import { Layout } from "components/Layout";
// import { SubBreeds } from "components/SubBreeds";
import { LoginPage } from "pages/LoginPages";

// const MyComponent = lazy(() => import('path/to/MyComponent'));
const Home = lazy(() => import('./pages/Home').then(module => {
    // console.log(module);
    return module;
}));
const Dogs = lazy(() => import('./pages/Dogs'));
const DogDetails = lazy(() => import('./pages/DogDetails'));


const Gallery = lazy(() => import('./components/Gallery').then(module => ({
    
    ...module, default: module.Gallery,
})));

const SubBreeds = lazy(() => import('./components/SubBreeds').then(module => ({
   
    ...module, default: module.SubBreeds,
})));


export default function AppFive(){
    return (
      
   
           
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="login" element={<LoginPage />} />
                            
                        <Route index element={<Home />} />
                        <Route path="dogs" element={<Dogs />} /> 
                        <Route path="dogs/:dogId" element={<DogDetails />}>
                            <Route path="subbreeds" element={<div><SubBreeds/></div>} />
                            <Route path="gallery" element={<Gallery/> } />
                        </Route>
                
                    </Route>
                </Routes>
         
            
    );  
};

    
