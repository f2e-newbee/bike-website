import { configureStore } from '@reduxjs/toolkit';
import  fetchReducer from './reducer/fetchReducer';

export const store = configureStore({
    reducer: {
        fetchReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
});