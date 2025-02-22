import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import { propertyApi, detailsApi } from "./api/userApi"; 

export const store = configureStore({
  reducer: {
    userSlice,
    [propertyApi.reducerPath]: propertyApi.reducer,
    [detailsApi.reducerPath]: detailsApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(propertyApi.middleware, detailsApi.middleware), 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
