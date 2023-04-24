import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import AppTwo from './AppTwo';
import AppThree from './AppThree';
import AppFour from 'AppFour';
import AppFive from 'AppFive'; 


import AuthContextTwo from 'components/contexts/context';
import authContext from 'components/UserMenu/authContext';
// import Provider from 'components/contexts/Provider';
import { store } from '../src/redux/store';
import { Provider } from 'react-redux';
import AuthProvider from 'components/UserMenu/AuthProvider';



ReactDom.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
        {/* <BrowserRouter basename='/IvanSlivenko'> */}
        <BrowserRouter>
            <AuthProvider>
                    {/* <authContext.Provider value={{name: 'Mango' }}> */}
                    {/* <App /> */}
                    {/* <AppTwo /> */}
                    {/* <AppThree />  */}
                {/* <AppFour /> */}
                <Provider store={store}> 
                    <AppFive />
                </Provider>

                    {/* </authContext.Provider> */}
            </AuthProvider>
        </BrowserRouter>
      
    </React.StrictMode>
);






