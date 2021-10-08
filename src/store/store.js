import { configureStore } from '@reduxjs/toolkit';
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
import contacts from '../store/contacts';
import filtration from '../store/filtration';

const contactsPersistConfig = {
  key: 'contacts',
  storage: storage,
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contacts),
    filtration: filtration,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
