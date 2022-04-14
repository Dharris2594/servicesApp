import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import PouchDB from '../../pouchdb.js';

const localDb = new PouchDB('myServices', { adapter: 'react-native-sqlite' });

export const loadMyServices = createAsyncThunk(
  'myServices/loadMyServices',
  async (username, { rejectWithValue }) => {
    try {
      const response =  await localDb
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

const myServicesSlice = createSlice({
  initialState: {
    myServices: [],
  },
  name: 'myServices',
  reducers: {},
  extraReducers: {
    [loadMyServices.fulfilled]: (state, action) => {
      state.myServices = action.payload.docs;
    },
  },
});


export const SelectmyServices = (state) => state.myServices.myServices;

export default myServicesSlice.reducer;
