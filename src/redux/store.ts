import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from 'redux-persist';
import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './slice/authSlice';
import { loginSlice } from './slice/loginSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [''],
    blacklist: ['']
};

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['id', 'name', 'email', 'token', 'role']
};

const reducers = combineReducers({
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    login: loginSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
