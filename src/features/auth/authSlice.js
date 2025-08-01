import {createSlice} from '@reduxjs/toolkit';

const tokenfromStorage = localStorage.getItem('token');

const initialState = {
    user: null,
    token: tokenfromStorage,
    isAuthenticated: !!tokenfromStorage,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginsuccess: (state, action) => {
            state.user = action.payload.username;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            localStorage.setItem('token', action.payload.token);
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token');
        },
    },
})

export const { loginsuccess, logout } = authSlice.actions;

export default authSlice.reducer;