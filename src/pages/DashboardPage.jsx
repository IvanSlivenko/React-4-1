import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import {isLoeggedIn }from ''
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "redux/userSlice";
import { useLogOutRedirect } from 'hooks/useLogOutRedirect';




export const DashboardPage = () => { 

    useLogOutRedirect();

    
    return (
        <div>Dashboard Page</div>
    );
};