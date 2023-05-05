import { UserMenuTwo } from "components/UserMenuTwo";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import  Navigation  from '../UserMenu/Navigation';
import  AuthNav from '../UserMenu/AuthNav';
import  UserMenuThree   from '../UserMenu/UserMenuThree';




const styles = {
    header: {

    },
};


export default function AppBarThree () { 

    
    
    return (
        <header style={styles.header} >
            <Navigation />
            <AuthNav/>            
            <UserMenuTwo />
            
        </header>
    );
};