import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import servicesReducer from './services/servicesSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    services: servicesReducer,
  },
});
