import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  authReducer  from './reducer/authSlice';
import postReducer from './reducer/postSlice';

export const rootReducer = combineReducers({
    user: authReducer,
    posts: postReducer
})

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
