import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "../services/api";
import userReducer from "../features/userSlice";
import cartReducer from "../features/cartSlice";
import prodLocationReducer from "../features/prodLocationSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [api.reducerPath],
};

const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
  user: userReducer,
  cart: cartReducer,
  prodLocation: prodLocationReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
