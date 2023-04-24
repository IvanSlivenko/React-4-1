import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { increment } from "redux/store";
import { decrement } from "redux/store";







export const Layout = () => {

    const value = useSelector(state => state.myValue);
    // console.log(value);

    const dispath = useDispatch();

    return (
        <> 
            <div>{value}</div>
            <button onClick={() => dispath(increment(1))}>Increment</button>
            <button  onClick={()=>dispath(decrement(1))}>Decrement</button>

            {/* <header>
                <ul>
                    <li><NavLink to="/">Домашня сторінка</NavLink></li>
                    <li><NavLink to="/dogs">Колекція</NavLink></li>       
                </ul>
            </header>
            
            <main>
                <Suspense fallback={<div>Loading...</div> }>
                    <Outlet />
            </Suspense>
            </main> */}

            {/* <footer>Footer</footer> */}
            
        
    </>
    );
};

