import React, { useContext } from "react";
import context from "components/UserMenu/authContext";

const styles = {

};


export default function UserMenu() { 
    const {user,logIn, logOut} = useContext(context);
    // console.log(user);
  

    return (
        <div style={styles.container}>

            {/* // рендер за умовою */}
            {user ?  ( <>
                <p style={styles.tag}> {user}</p>
                <button type="button" onClick={logOut}>
                Вийти
                </button>
            </>) : (
                  <button type="button" onClick={logIn}>
                Увійти
            </button>  
            )}
        </div>
    );
}

