import { configureStore } from "@reduxjs/toolkit";
import { jokesApi } from "./jokes/api";

export const store = configureStore({
  reducer: {
    [jokesApi.reducerPath]: jokesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jokesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
