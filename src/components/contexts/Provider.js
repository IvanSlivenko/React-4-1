import { useState, useMemo } from "react";
import autchContext from './context';
import avatar from './avatar.png';

export default function Provider({ children }) { 
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onLogIn = () => {
        setUser({ name: 'Манго', avatar });
        setIsLoggedIn(true);
    };

    const onLogOut = () => {
        setUser(null);
        setIsLoggedIn(false);
    };

    const providerValue = useMemo(() => { 
        return { user, isLoggedIn, onLogIn, onLogOut };
    }, [isLoggedIn, user]);
    
    return (
        <autchContext.Provider value={providerValue}>
            { children}
        </autchContext.Provider>  
    );

}