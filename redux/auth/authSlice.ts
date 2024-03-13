import { createSlice } from '@reduxjs/toolkit';

type Auth = {
    token: string;
    email: string;
};

type InitialState = {
    auth: Auth[];
    isLoading: boolean;
    errMsg: any;
    error: boolean;
};

const initialState: InitialState = {
    auth: [],
    isLoading: false,
    errMsg: '',
    error: false,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
            postAuthPending: (state) => {
                state.isLoading = true;
            },
            postAuthSuccess: (state, action) => {
                state.isLoading = false;
                state.auth = action.payload;
            },
            postAuthFailure: (state, action) => {
                state.isLoading = false;
                state.error = true;
                state.errMsg = action.payload;
            },
            logout: (state) => {
                state.auth = [];
            }
    },
});

export const {postAuthPending, postAuthFailure, postAuthSuccess, logout} = authSlice.actions;
export default authSlice.reducer;