import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { tryLogin, createUser, logOut } from './authAPI';

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
    await logOut();
    const response = await createUser(userData);

    if (response.status === 409) {
        return rejectWithValue('El usuario ya esta tomado');
    }

    console.log(response.status);

    if (!response.ok) {
        return rejectWithValue('Error creando el usuario');
    }

    const response2 = await tryLogin(userData);

    return {
        username: userData.username
    };
});

const authSlice = createSlice({
    initialState: {
        username: '',
        loggedIn: false,
    },
    name: 'auth',
    reducers: {},
    extraReducers: {
        [loginUser.fulfilled]: (state, action) => {
            state.username = action.payload.username;
            state.loggedIn = true;
        },
        [registerUser.fulfilled]: (state, action) => {
            state.username = action.payload.username;
            state.loggedIn = true;
        },
    }
});

export const SelectCurrentUsername = state => state.auth.username;
export const SelectCookie = state => state.auth.cookie;

export default authSlice.reducer;