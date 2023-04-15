import { useContext } from "react";
import Navigation from "components/Navigation/Navigation";
// import UserMenu from "components/UserMenu/UserMenu";
import authContextTwo from '../../components/contexts/context';
import style from '../../components/AppBar/Appbar.module.css';





export default function AppBar() { 
    // const { isLoggeIn, user, onLogIn, onLogOut } = useContext(authContextTwo);
    
    return (
        <header className={style.header}>
            
            <button type="button" className={style.button}>  Пропуск першого рендеру</button> 
            <button type="button" className={style.button}> Покемони з хуками</button>
            <button type="button" className={style.button}> useReducer</button>
            <button type="button" className={style.button}>  useMemo</button>
            <button type="button" className={style.button}>  News</button>
            

            <Navigation/>

            {/* {isLoggeIn ? (
            <button type = "button" onclick = { onLogOut }>
                Вийти
            </button>   
            ): (
            <button type = "button" onclick = { onLogIn }>
                Ввійти
            </button>
            )} */}
        </header>
    ) 
}
     
    
    
    
    
    
    


