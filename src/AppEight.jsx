// import { useState, useEffect } from "react";
import { Suspense } from "react";
import { lazy } from "react";
// import Dogs from "pages/Dogs";
// import Home from "pages/Home";
// import DogDetails from "pages/DogDetails";
// import { Gallery } from "components/Gallery";

import { Route, Routes } from "react-router-dom";
import Switch from 'react-switch';

import { Layout } from "components/Layout";
// import { SubBreeds } from "components/SubBreeds";
import { LoginPage } from "pages";
import { DashboardPage } from 'pages';
import AppBarThree from '../src/components/AppBar/AppBarrThree';


import {HomeView} from '../src/views/HomeView';
import {RegisterViewTwo} from './views/RegisterView';
import {LoginView} from '../src/views/LoginView';
import {TodosView} from '../src/views/TodosView';








const AppEight=()=>{
    return (
       <div>
               
            <AppBarThree />
           

          
            {/* <Switch> */}
                <Routes>
                    <Route path="/" element={<HomeView/>}/>
                    <Route path="/register" element={<RegisterViewTwo/>} />
                    <Route path="/login" element={<LoginView />} />
                    <Route path="/todos" element={<TodosView/>} /> 
                </Routes> 
            {/* </Switch>  */}
            
            
        </div>
               
    );  
};

export default AppEight;
