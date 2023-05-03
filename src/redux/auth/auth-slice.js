import { createSlice } from "@reduxjs/toolkit";
import { authOperations } from './auth-operations';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers:{
        [authOperations.register.fulfilled](state,action){

         },
    },
});

/////////////////////////////////////
const persistConfig = {
    key: 'auth',
    storage,
    // blacklist:['c','b','a'],
    whitelist:['value'],
};

export const authReducer = persistReducer(
        persistConfig,
        authSlice.reducer
    );


//////////////////////////////////////



export default authReducer;