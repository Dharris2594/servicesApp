import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { remoteServiceDb } from '../../constants.js';

export const loginUser = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
    try {
        const response = await remoteServiceDb.logIn(userData.username.trim(), userData.password.trim());

        return {
            username: response.name,
        };
    }
    catch (err) {
        if (err.name === 'unauthorized' || err.name === 'forbidden'){
            return rejectWithValue('Usuario o contraseña incorrectos!');
        }
        else {
            return rejectWithValue('Ha ocurrido un error!');
        }
    }
});

export const registerUser = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
    try {
        await remoteServiceDb.signUp(userData.username.trim(), userData.password.trim(), {
            roles: ['customer'],
        });

        const response = await remoteServiceDb.logIn(userData.username.trim(), userData.password.trim());

        return {
            username: response.name,
        };
    }
    catch (err) {
        if (err.name === 'conflict') {
            return rejectWithValue('El usuario ya esta tomado!');
        }
        else if (err.name === 'forbidden') {
            return rejectWithValue('Nombre de usuario invalido!');
        }
        else {
            console.log(err);
            return rejectWithValue('Ha ocurrido un error!');
        }
    }
});

export const logOutUser = createAsyncThunk('auth/logout', async (data, {rejectWithValue}) => {
    try {
        await remoteServiceDb.logOut();
    }
    catch (error) {
        return rejectWithValue(error);
    }
});

const authSlice = createSlice({
    initialState: {
        username: '',
    },
    name: 'auth',
    reducers: {},
    extraReducers: {
        [loginUser.fulfilled]: (state, action) => {
            state.username = action.payload.username;
        },
        [registerUser.fulfilled]: (state, action) => {
            state.username = action.payload.username;
        },
        [logOutUser.fulfilled]: (state, action) => {
            state.username = '';
        },
    },
});

export const SelectCurrentUsername = state => state.auth.username;

export default authSlice.reducer;
