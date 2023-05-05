import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://lpi-tasker.herokuapp.com';


const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/singup', credentials);
        return data;
    } catch (error) { }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        return data;
    } catch (error) { }
});

const logOut = createAsyncThunk('auth/logout', async credentials => {
    try {
        const { data } = await axios.post('/users/logout', credentials);
        return data;
    } catch (error) { }
});
export default register;



