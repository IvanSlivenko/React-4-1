import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// import { } from "react-router-dom";
import { Navigate } from "react-router-dom";
import authSelectors from '../../redux/auth/auth-Selector';
import { authReducer } from '../../../src/redux/auth/auth-slice';
import { ViewTwo } from '../../../src/views/ViewTwo';
import { LoginView } from '../../../src/views/LoginView';






export default function PrivateRoute({ children, ...routeProps }) { 
    console.log(routeProps);

    
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return(
        <Routes>
            <Route {...routeProps}
                // path="/user"
                element={ isLoggedIn ? children :<Navigate to="/login"/>  }
            />;    
        </Routes>
    )
}

 