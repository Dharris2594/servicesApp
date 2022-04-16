import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { localDb, remoteDb } from '../../dbs.js';
import uuid from 'react-native-uuid';

export const loadUserServices = createAsyncThunk(
  'services/loadUserServices',
  async (data, { rejectWithValue }) => {
    try {
      const response = await localDb.find({
        selector: {
          author: data.user,
        },
        limit: 5,
        skip: (data.page - 1) * 5,
      });

      return {
        docs: response.docs,
      };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const loadServices = createAsyncThunk(
  'services/loadServices',
  async (page, { rejectWithValue }) => {
    try {
      const response = await remoteDb.find({
        selector: {
          updated_at: { $gt: true },
        },
        limit: 5,
        skip: (page - 1) * 5,
      });

      return {
        docs: response.docs,
      };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteUserService = createAsyncThunk(
  'services/deleteUserService',
  async (service, { rejectWithValue }) => {
    try {
      await localDb.put(service);

      return service;
    } catch (err) {
      console.log(JSON.stringify(err));
      return rejectWithValue(JSON.stringify(err));
    }
  }
);

export const addUpdateUserService = createAsyncThunk(
  'services/addUserService',
  async (data, { rejectWithValue }) => {
    try {
      const service = {
        _id: data._id ? data._id : uuid.v4(),
        _rev: data._rev ? data._rev : null,
        title: data.title,
        description: data.description,
        rating: 4.8,
        author: data.author,
        price: parseInt(data.price, 10),
        categories: [],
        img: data.img,
        updated_at: Date.now(),
      };

      const response = await localDb.put(service);

      if (!response.ok) {
        return rejectWithValue('Ha ocurrido un error');
      }

      return service;
    } catch (err) {
      return rejectWithValue(JSON.stringify(err));
    }
  }
);

const servicesSlice = createSlice({
  initialState: {
    services: [],
    userServices: [],
  },
  name: 'services',
  reducers: {},
  extraReducers: {
    [loadUserServices.fulfilled]: (state, action) => {
      state.userServices = action.payload.docs;
    },
    [loadServices.fulfilled]: (state, action) => {
      state.services = action.payload.docs;
    },
  },
});

export const SelectUserServices = (state) => state.services.userServices;
export const SelectServices = (state) => state.services.services;
export const SelectMyService = (serviceId) => (state) =>
  state.services.userServices.filter(({ _id }) => _id === serviceId)[0];
export const SelectService = (serviceId) => (state) =>
  state.services.services.filter(({ _id }) => _id === serviceId)[0];

export default servicesSlice.reducer;
