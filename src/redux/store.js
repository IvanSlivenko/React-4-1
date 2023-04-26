import { configureStore } from '@reduxjs/toolkit';
// import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { myValueSlice } from './myValue/slice';
import { itemsSlice } from './itemsSlice/slice';
import { userSlice } from './userSlice';



// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');


// const myReducer = createReducer(100, {
//     [increment]: (state, action) => state + action.payload,
//     [decrement]: (state, action) => state - action.payload,
// });


// export const add = createAction('items/add');
// export const remove = createAction('items/remove');
// const itemsReducer = createReducer([], {
//     [add]: (state, action) => state.push(action.payload),
//     [remove]: (state, action) => state.filter(item => item.id !== action.payload),
    
// });




// export const { increment, decrement } = myValueSlice.actions;

//  console.log(increment.toString());

export const store = configureStore({
    reducer: {
      
        // myValue: myReducer,
        myValue: myValueSlice.reducer,
        // items: itemsReducer,
        items: itemsSlice.reducer,
        user: userSlice.reducer,

    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(),logger],
})