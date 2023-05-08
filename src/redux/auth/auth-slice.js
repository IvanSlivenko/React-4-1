import { createSlice } from "@reduxjs/toolkit";
import operations  from './auth-operations';




const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    redusers: {},
    extraReducers: {
        [operations.register.fulfilled]:(state, action)=> { 
            state.user = action.payload.user;
            // state.token = action.payload.token;
            state.isLoggedIn = true;

        },
         [operations.logIn.fulfilled]:(state, action)=>{ 
            state.user = action.payload.user;
            // state.token = action.payload.token;
            state.isLoggedIn = true;

        },
    },
})

const authReducer = authSlice.reducer;

export default authReducer;