import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import AppTwo from './AppTwo';
import AppThree from './AppThree';
import AppFour from 'AppFour'; 


import AuthContextTwo from 'components/contexts/context';
import authContext from 'components/UserMenu/authContext';
import Provider from 'components/contexts/Provider';
import AuthProvider from 'components/UserMenu/AuthProvider';


 
/////////////////////////////////////////////////////////////
// ReactDom.render(
//     <React.StrictMode>

//         <AuthProvider>
//         {/* <authContext.Provider value={{name: 'Mango' }}> */}
//             <App />
//             <AppTwo/>

//         {/* </authContext.Provider> */}
//         </AuthProvider>
      
//     </React.StrictMode>,
//     document.querySelector('#root')
// );

////////////////////////////////////////////////////

ReactDom.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
        {/* <BrowserRouter basename='/IvanSlivenko'> */}
        <BrowserRouter>
            <AuthProvider>
                    {/* <authContext.Provider value={{name: 'Mango' }}> */}
                    {/* <App /> */}
                    {/* <AppTwo /> */}
                    {/* <AppThree />  */}
                    <AppFour/>

                    {/* </authContext.Provider> */}
            </AuthProvider>
        </BrowserRouter>
      
    </React.StrictMode>
);






