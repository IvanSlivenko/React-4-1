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
import { LoginPage } from "pages";
import { DashboardPage } from 'pages';
import { AppBarThree } from "components/AppBar/AppBarrThree";
import Switch from 'react-switch';
import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import TodosView from 'views/TodosView'





export default function AppEight(){
    return (
      
        <>
            <AppBarThree />
            
            <Switch>
                <Routes>
                    <Route path="/" component={HomeView}/>
                    <Route path="/register" component={RegisterView} />
                    <Route path="/login" component={LoginView} />
                    <Route path="/todos" component={TodosView} /> 
                </Routes>
            </Switch>
            
        </>
           
        
             
           
                   
        
        
         
            
    );  
};

    
