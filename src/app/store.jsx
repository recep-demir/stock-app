import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
// import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'




const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, authReducer);


const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export   let persistor = persistStore(store) //named export istedigimiz kadar export edilir import edilirken {} icine alinir.

export default store; //default export it can just create onyly one.
