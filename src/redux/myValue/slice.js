// import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

export const myValueSlice = createSlice({
    name: 'myValue',
    initialState: 0,
    reducers: {
        increment: (state, action) =>{
            return state+action.payload
        },
        decrement: (state, action)=> {
            return state-action.payload
        },
       
        }
});
    
export const { increment, decrement } = myValueSlice.actions;