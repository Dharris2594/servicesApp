import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { localServiceDb, remoteServiceDb } from '../../constants.js';

export const loadUserServices = createAsyncThunk(
  'services/loadUserServices',
  async (username, { rejectWithValue }) => {
    try {
      const response =  await localServiceDb
      .find({
        selector: {
          userId: `org.couchdb.user:${username.toLowerCase().trim()}`,
        },
        fields: ['_id', 'title', 'rating', 'categoryId'],
      });

      return {
        docs: response.docs,
      };
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const loadServices = createAsyncThunk(
    'services/loadServices',
    async (data, {rejectWithValue}) => {
        try {
            const response = await remoteServiceDb
            .find({
                selector: {
                    updated_at: {$gt: true},
                },
                fields: ['_id', 'title', 'rating', 'categoryId','userId'],
            });

            return {
                docs: response.docs,
            };
        } catch (err) {
            rejectWithValue(err);
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

export default servicesSlice.reducer;
