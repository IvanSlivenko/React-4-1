import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {

    return (
        <> 
            <header>
                <ul>
                    <li><NavLink to="/">Домашня сторінка</NavLink></li>
                    <li><NavLink to="/dogs">Колекція</NavLink></li>       
                </ul>
            </header>
            
            <main>
                <Outlet />
            </main>

            {/* <footer>Footer</footer> */}
            
        
    </>
    );
};

