import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';
import { Roles } from 'src/types';
import { getUserData } from 'src/api/auth';

export type AuthState = {
    email: string;
    name: string;
    id: string;
    token: string;
    role: Roles[];
    loading: boolean;
    success: boolean;
    error: boolean;
};

export const fetchUserData = createAsyncThunk('users/fetchUserData', async (data, { dispatch, rejectWithValue }) => {
    try {
        const response = await getUserData();
        const { data = {}, success = false } = response.data;

        if (success) {
            dispatch(setAuth(data));

            return true;
        }

        return rejectWithValue(false);
    } catch (error: any) {
        const { status } = error.response || {};

        if ([401, 404].includes(status)) {
            dispatch(logout());
        }

        return rejectWithValue(false);
    }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        email: '',
        name: '',
        id: '',
        token: '',
        role: [],
        place_id: '',
        place_code: '',
        loading: false,
        success: false,
        error: false
    } as AuthState,
    reducers: {
        setAuth: (state: AuthState, action) => {
            const { token, email, name, id, role, place_id, place_code } = action.payload;
            state.email = email;
            state.name = name;
            state.id = id;

            if (role) {
                state.role = role;
            }

            if (token) {
                state.token = token;
            }
        },
        logout: (state: AuthState) => {
            state.email = '';
            state.name = '';
            state.id = '';
            state.token = '';
            state.role = [];
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchUserData.pending, (state: AuthState) => {
            state.loading = true;
        });
        builder.addCase(fetchUserData.fulfilled, (state: AuthState) => {
            state.loading = false;
            state.success = true;
            state.error = false;
        });
        builder.addCase(fetchUserData.rejected, (state: AuthState) => {
            state.loading = false;
            state.success = false;
            state.error = true;
        });
    }
});

export const selectAuth = (state: RootState) => state.auth;
export const { setAuth, logout } = authSlice.actions;
