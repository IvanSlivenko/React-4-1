import { UserMenuTwo } from "components/UserMenuTwo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



import authSelectors from "../../redux/auth/auth-Selector";


import { Navigation } from '../UserMenu/Navigation';
import { AuthNav } from '../UserMenu/AuthNav';
import { UserMenuThree } from '../UserMenu/UserMenuThree';


const styles = {
    header: {
        padding: 4,
        fontSize: 16,
        // border: 'solid 1px black',
        borderBlockEnd: 'solid 1px black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
};

export default function AppBarThree () { 
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    console.log(isLoggedIn);
    
    
    return (
        <header style={styles.header} >

            <Navigation />
            {/* <AuthNav /> */}
            {/* <UserMenuThree /> */}
            

            {isLoggedIn ? <UserMenuThree /> : <AuthNav/>  }
            
        </header>
    );
};
 