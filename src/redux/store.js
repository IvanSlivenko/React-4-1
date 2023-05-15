import { configureStore,getDefaultMiddleware} from '@reduxjs/toolkit';
import { clicksReducer } from './clicksSlise/clicksSlice';

import logger from 'redux-logger';
import { myValueSlice } from './myValue/slice';
import { itemsSlice } from './itemsSlice/slice';
import { userSlice } from './userSlice';
import { clicksSlice } from './clicksSlise/clicksSlice';

import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import authReducer  from './auth/auth-slice';
import persistReducer from 'redux-persist/es/persistReducer';
// import { todosReducer } from './todos/todosSlice';

// const middleware = [
//     ...getDefaultMiddleware(), logger
// ];

const authPersistConfig = {
    key: 'autch',
    storage,
    whitelist:['token'],
}


export const store = configureStore({
    reducer: {
      
        // myValue: myValueSlice.reducer,
        // items: itemsSlice.reducer,
        // user: userSlice.reducer,
        // clicks: clicksReducer,

        // autch:authReducer,
        autch: persistReducer(authPersistConfig, authReducer),
        // todos: todosReducer,
        

    },
    // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],

    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
    }, 
    
    // middleware,
    devTools:process.env.NODE_ENV==='development',
});

export const persistor = persistStore(store);
