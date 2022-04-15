import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { localDb, remoteDb } from '../../dbs.js';

export const loadUserServices = createAsyncThunk(
  'services/loadUserServices',
  async (username, { rejectWithValue }) => {
    try {
      const response =  await localDb
      .find({
        selector: {
          author: `org.couchdb.user:${username}`,
        },
        fields: ['_id', 'title', 'rating', 'categoryId'],
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
    async (data, { rejectWithValue }) => {
        try {
            const response = await remoteDb
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
            return rejectWithValue(err);
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
