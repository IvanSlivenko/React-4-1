import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';




export const clicksSlice = createSlice({
    name: 'clicks',
    initialState: {
        value: 0,
        a: 1,
        b: 2,
        c:3,
    },
    reducers: {
        update(state, action){
            state.value = state.value + action.payload;
        },   
     },
});

const persistConfig = {
    key: 'clicks',
    storage,
    // blacklist:['c','b','a'],
    whitelist:['value'],
};

export const clicksReducer = persistReducer(
        persistConfig,
        clicksSlice.reducer
    );
    
export const { update } = clicksSlice.actions;

//Selectors

export const getClicksValue = state => state.clicks.value;