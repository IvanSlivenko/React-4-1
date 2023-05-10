import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// axios.defaults.baseURL = 'https://lpj-tasker.herokuapp.com';
// https://connections-api.herokuapp.com
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};


const register = createAsyncThunk('auth/register', async credentials => {
    //  console.log(credentials);
    try {
        const { data } = await axios.post('/users/signup', credentials);
       
        token.set(data.token);
        return data;
    } catch (error) { }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) { }
});

const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/users/logout');
        token.unset();
    } catch (error) { }
});

// const getCurrentUser = () => async (Dispatch, getState) => { 
//     const { 
//         autch: { token: persistedNoren},
//     }
// }


// Authorization: 'Bearer токен'

const operations = {
    register,
    logIn,
    logOut,

};
export default operations;





