import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://lpi-tasker.herokuapp.com';
const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/singup', credentials);
        return data
    } catch (error) { }
});