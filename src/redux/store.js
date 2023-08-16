import { configureStore } from "@reduxjs/toolkit";
import { reducerAuthorization } from "./authSlice";
import { contactsDetailsReducer } from './contactsSlice'


export const store = configureStore({
    reducer: {
      userDetails: reducerAuthorization,
      contactDetails: contactsDetailsReducer,
    },
});