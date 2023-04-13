import React from 'react';
import ReactDom from 'react-dom';
import AuthPovider from './components/contexts/Provider';


import App from './App';



ReactDom.render(
    <React.StrictMode>
       <AuthPovider>
            <App />
        </AuthPovider>
      
    </React.StrictMode>,
    document.querySelector('#root')
);






