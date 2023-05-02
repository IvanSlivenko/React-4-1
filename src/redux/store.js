import { configureStore} from '@reduxjs/toolkit';
// import { persistStore } from 'redux-persist';
import { clicksReducer } from './clicksSlise/clicksSlice';

import logger from 'redux-logger';
import { myValueSlice } from './myValue/slice';
import { itemsSlice } from './itemsSlice/slice';
import { userSlice } from './userSlice';
import { clicksSlice } from './clicksSlise/clicksSlice';
import { storage } from 'redux-persist/lib/storage';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'



import { todosReducer } from './todos';
import { authReducer} from './auth'
import persistReducer from 'redux-persist/es/persistReducer';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist:['token'],
}





export const store = configureStore({
    reducer: {
      
        // myValue: myValueSlice.reducer,
        // items: itemsSlice.reducer,
        // user: userSlice.reducer,
        // clicks: clicksReducer,
        autch: persistReducer(authPersistConfig, authReducer),
        todos: todosReducer,
        

    },
    // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],

    // middleware(getDefaultMiddleware) {
    //     return getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //         },
    //     });
    // }, 
    
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

export const persistor = persistStore(store);
