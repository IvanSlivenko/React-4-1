import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

const myValueSlice = createSlice({
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


const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        add(state, action) {
        state.push(action.payload)
        },
        remove(state, action){
            return state.filter(item => item.id !== action.payload)
        },
       
        }
});
    
export const { add, remove } = itemsSlice.actions;

// export const { increment, decrement } = myValueSlice.actions;

//  console.log(increment.toString());

export const store = configureStore({
    reducer: {
      
        // myValue: myReducer,
        myValue: myValueSlice.reducer,
        // items: itemsReducer,
        items: itemsSlice.reducer,

  },
})