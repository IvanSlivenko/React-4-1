import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// import { increment } from "redux/store";
// import { decrement } from "redux/store";

import { increment } from "redux/myValue/slice";
import { decrement } from "redux/myValue/slice";
import { AppBarTwo } from "./AppBar/AppBarrTwo";







export const Layout = () => {

    const value = useSelector(state => state.myValue);
    // console.log(value);

    const dispath = useDispatch();

    return (
        <div> 
            {/* //////////////////////////// */}
                {/* <AppBarTwo/> */}
                {/* <Outlet /> */}
            
            {/* //////////////////////////////// */}

            <div>{value}</div>
            <button onClick={() => dispath(increment(1))}>Increment</button>
            <button  onClick={()=>dispath(decrement(1))}>Decrement</button>

            {/* /////////////////////////////////// */}

            {/* <header>
                <ul>
                    <li><NavLink to="/">Домашня сторінка</NavLink></li>
                    <li><NavLink to="/dogs">Колекція</NavLink></li>       
                </ul>
            </header>
            
            <main>
                <Suspense fallback={<div>Loading...</div> }>
                    <Outlet />
                    //<Outlet /> № 2 
            </Suspense>
            </main> */}

            {/* <footer>Footer</footer> */}
            
        
    </div>
    );
};

