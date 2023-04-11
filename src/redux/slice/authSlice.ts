import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';
import { Roles } from 'src/types';
import { getUserData } from 'src/api/auth';
import { ACCOUNT_ACTIVE, ADMIN, ROLE_CLIENT } from 'src/configs/constant';

export type AuthState = {
    token: string;
    user: {
        username: string;
        email: string;
        bio: string;
        avatar: string;
        dob: string;
        address: string;
        role: Roles[];
        status: number;
        created_at: string;
    };
    loading: boolean;
    success: boolean;
    error: boolean;
};

export const fetchUserData = createAsyncThunk('users/fetchUserData', async (data, { dispatch, rejectWithValue }) => {
    try {
        const response = await getUserData();
        const { data = {}, success = false } = response.data;

        if (success) {
            dispatch(setProfile(data));

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
        token: '',
        user: {
            username: '',
            email: '',
            bio: '',
            avatar: '',
            dob: '',
            address: '',
            role: [],
            status: ACCOUNT_ACTIVE,
            created_at: ''
        },
        loading: false,
        success: false,
        error: false
    } as AuthState,
    reducers: {
        setAuth: (state: AuthState, action) => {
            const { token } = action.payload;
            if (token) {
                state.token = token;
            }
        },
        logout: (state: AuthState) => {
            state.token = '';
            state.user.email = '';
            state.user.role = [];
        },

        setProfile: (state: AuthState, action) => {
            const { username, email, bio, avatar, dob, role, status, created_at } = action.payload;
            state.user.username = username;
            state.user.email = email;
            state.user.bio = bio;
            state.user.avatar = avatar;
            state.user.dob = dob;
            state.user.status = status;
            state.user.created_at = created_at;
            state.user.role = role;
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
export const { setAuth, setProfile, logout } = authSlice.actions;
