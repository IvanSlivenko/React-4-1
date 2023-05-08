import { UserMenuTwo } from "components/UserMenuTwo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";





const AppBarTwo = () => { 

    
    const isLoggedIn=useSelector(state => state.user.isLoggedIn);
    return (
        <header style={{
            display: 'flex',
            justifyContent:'space-between',
            padding: 8,
            borderBottom: '1px solid black',
            marginBottom: 12
        
        }} >

           

            <nav>
                {!isLoggedIn && <Link to="/login">Log in</Link>}
                {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
                
                
            </nav>
            {isLoggedIn && <UserMenuTwo/>}
             
        </header>
    );
};

export default AppBarTwo;