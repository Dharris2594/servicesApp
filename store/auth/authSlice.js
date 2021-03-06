import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { tryLogin, createUser, logOut, createUserDB, configureUserDB } from './authAPI';

export const loginUser = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
    const response = await tryLogin(userData);

    if (!response.ok){
        return rejectWithValue('Usuario o contraseña incorrectos!');
    }

    return {
        username: userData.username
    };
});

export const registerUser = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
    const response = await createUser(userData);

    if (response.status === 409) {
        return rejectWithValue('El usuario ya esta tomado');
    }

    if (!response.ok) {
        return rejectWithValue('Error creando el usuario');
    }

    const response2 = await createUserDB(userData.username);

    if(!response2.ok){
        return rejectWithValue('Error creando base de datos de usuario');
    }

    const response3 = await configureUserDB(userData.username);

    if(!response3.ok){
        return rejectWithValue('Error configurando base de datos de usuario');
    }

    const response4 = await tryLogin(userData);

    if(!response4.ok) {
        return rejectWithValue('Ha Ocurrido un error en el registro');
    }

    return {
        username: userData.username
    };
});

export const logOutUser = createAsyncThunk('auth/logout', async (data, {rejectWithValue}) => {
    const response = await logOut();

    if (!response.ok) {
        return rejectWithValue('Ha ocurrido un Error');
    }

    return await response.json();
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
    }
});

export const SelectCurrentUsername = state => state.auth.username;

export default authSlice.reducer;