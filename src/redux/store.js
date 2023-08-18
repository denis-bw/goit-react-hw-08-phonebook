import { configureStore } from "@reduxjs/toolkit";
import { reducerAuthorization } from "./authSlice";
import { contactsDetailsReducer } from './contactsSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token']
}


export const store = configureStore({
  reducer: {
      contactDetails: contactsDetailsReducer,
      userDetails: persistReducer(authPersistConfig, reducerAuthorization),    
    },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
      }),
});

export const persistor = persistStore(store);