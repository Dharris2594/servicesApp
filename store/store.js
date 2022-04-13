import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import myServicesReducer from './myServices/myServicesSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    myServices: myServicesReducer
  },
});
