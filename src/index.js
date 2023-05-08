import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import {Provider } from 'react-redux';

import App from './App';
import AppTwo from './AppTwo';
import AppThree from './AppThree';
import AppFour from 'AppFour';
import AppFive from 'AppFive'; 
import AppSix from 'AppSix'; 
import AppEight from '../src/AppEight';
import AppSeven from 'AppSeven';


import AuthContextTwo from 'components/contexts/context';
import authContext from 'components/UserMenu/authContext';
// import Provider from 'components/contexts/Provider';
// import { store, persistor } from '../src/redux/store';
import {store, persistor } from '../src/redux/store';
import AuthProvider from 'components/UserMenu/AuthProvider';



ReactDom.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
        {/* <BrowserRouter basename='/IvanSlivenko'> */}
        <BrowserRouter>
        {/* <AuthProvider> */}
         
                            {/* <authContext.Provider value={{name: 'Mango' }}> */}
                            {/* <App /> */}
                            {/* <AppTwo /> */}
                            {/* <AppThree />  */}
                             {/* <AppFive /> */}
                            {/* <AppSix /> */}
                            {/* <AppSeven /> */}
        
            
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                                              
                            <AppEight />
                                        
                    </PersistGate> 
                </Provider>

                    {/* </authContext.Provider> */}
            {/* </AuthProvider> */}
        </BrowserRouter>
      
    </React.StrictMode>
);






