import { useContext }  from "react";
import authContext from '../../components/contexts/context';
import style from '../../components/AppBar/Appbar.module.css';



export default function AppBar() { 
    const { isLoggeIn, user, onLogIn, onLogOut } = useContext(authContext);
    
    return (
        <header className={style.header}>
            {/* <Navigation/> */}

            {isLoggeIn ? (
            <button type = "button" onclick = { onLogOut }>
                Вийти
            </button>   
            ): (
            <button type = "button" onclick = { onLogIn }>
                Ввійти
            </button>
            )}
        </header>
    ) 
}
     
    
    
    
    
    
    


