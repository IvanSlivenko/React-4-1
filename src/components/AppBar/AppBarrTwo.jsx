import { UserMenuTwo } from "components/UserMenuTwo";
import { Link } from "react-router-dom";
export const AppBarTwo = () => { 
    return (
        <header style={{
            display: 'flex',
            justifyContent:'space-between',
            padding: 8,
            borderBottom: '1px solid black',
            marginBottom: 12
        
        }} >

           

            <nav>
                <Link to="/login">Log in</Link>
            </nav>
             <UserMenuTwo/>
        </header>
    );
};