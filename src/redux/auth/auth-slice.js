import { createSlice } from "@reduxjs/toolkit";
import operations  from './auth-operations';




const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'autch',
    initialState,
    redusers: {},
    extraReducers: {
        [operations.register.fulfilled]:(state, action)=> { 
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;

        },
         [operations.logIn.fulfilled]:(state, action)=>{ 
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;

        },
        [operations.logOut.fulfilled]: (state, action) => {
            state.user = {name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
        },
        [operations.fetchCurrenUser.fulfilled]: (state, action) => {
            // console.log(action);
            state.user = action.payload;
            //  state.user = { ...action.payload};
            // state.token = operations.token;
            state.isLoggedIn = true;
             
         },
    },
})

const authReducer = authSlice.reducer;

export default authReducer;