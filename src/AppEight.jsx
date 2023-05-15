import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Suspense } from "react";
import { lazy } from "react";
// import Dogs from "pages/Dogs";
// import Home from "pages/Home";
// import DogDetails from "pages/DogDetails";
// import { Gallery } from "components/Gallery";
import operations from './redux/auth/auth-operations';

import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import  PrivateRoute  from "../src/components/UserMenu/PrivateRoute";
// import { Switch } from "react-router"
// import Switch from 'react-switch';

import { Layout } from "components/Layout";
// import { SubBreeds } from "components/SubBreeds";
import { LoginPage } from "pages";
import { DashboardPage } from 'pages';
import AppBarThree from '../src/components/AppBar/AppBarrThree';


import { HomeView } from '../src/views/HomeView';
import { RegisterViewTwo } from './views/RegisterView';
import { LoginView } from '../src/views/LoginView';
import { ViewTwo } from '../src/views/ViewTwo';
// import {TodosView} from '../src/views/TodosView';








const AppEight = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(operations.fetchCurrenUser());
    },[dispatch])
    
    return (
       <div>
               
            <AppBarThree />
           

          
            
                <Routes>
                    <Route path="/" element={<HomeView/>}/>
                    <Route path="/register" element={<RegisterViewTwo/>} />
                    <Route path="/login" element={<LoginView />} />
                {/* <Route path="/todos" element={<TodosView/>} />  */}
                 {/* <Route path="/user" element={<ViewTwo/>} />  */}
                </Routes> 
            

            <PrivateRoute  path="/user">
                <ViewTwo/>
            </PrivateRoute>
                
            
            
            
        </div>
               
    );  
};

export default AppEight;
