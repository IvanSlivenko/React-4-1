import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://lpi-tasker.herokuapp.com';


const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/singup', credentials);
        return data;
    } catch (error) { }
});

const login = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        return data;
    } catch (error) { }
});
export default register;

// export default login;

