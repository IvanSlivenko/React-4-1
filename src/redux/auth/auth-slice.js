import { createSlice } from "@reduxjs/toolkit";
import  authOperations  from './auth-operations';




const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fullfilled](state, action) { 
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;

        },
         [authOperations.logIn.fullfilled](state, action) { 
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;

        },

    },
});

const authReducer = authSlice.reducer;

export default authReducer;