import {configureStore} from '@reduxjs/toolkit';
import appReducer from './feature/app/appSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: true,
    }).concat(logger);
  },
});
