import { createSlice } from "@reduxjs/toolkit";
import PouchDB from '../../pouchdb.js';

const remoteDb = new PouchDB(`http://admin:1111@152.67.46.150:5984/services`);
//const localDb = new PouchDB("myServices");


let handlerSync = null

const load = (state) => { 
    console.log('LOGRE LLEGAR AQUI');
    localDb.find({
        fields: ['_id', 'title', 'rating', 'categoryId']
    }).then(result => {
        console.log(result.docs);
        state.myServices = result.docs;
        state.loading = false;
    }).catch(err => {

    });
}

const myServicesSlice = createSlice({
  initialState: {
    myServices: [],
    handlerSync: null,
    loading: false
  },
  name: "myServices",
  reducers: {
    syncMyServices: (state, action) => {
      console.log('BRUH');
        handlerSync = PouchDB.sync(remoteDb, localDb, {
        live: true,
        retry: true,
      })
        .on("change", (info) => {
          // console.log(TAG, 'sync onChange', info)
        })
        .on("paused", (err) => load(state))
        .on("active", () => {
            console.log(err);
          // console.log(TAG, 'sync onActive')
        })
        .on("denied", (err) => {
            console.log(err);
          // console.log(TAG, 'sync onDenied', err)
        })
        .on("complete", (info) => {
            console.log('COMPLETE')
            console.log(info);
          // console.log(TAG, 'sync onComplete', info)
        })
        .on("error", (err) => {
            console.log(err);
          // console.log(TAG, 'sync onError', err)
        });
    },
    loadMyServices: (state, action) => load(state),
    cancelMyServicesSync: (state, action) => handlerSync.cancel()
  },
});

export const {syncMyServices, loadMyServices, cancelMyServicesSync } = myServicesSlice.actions;

export const SelectMyServicesLoading = (state) => state.myServices.loading;

export const SelectmyServices = (state) => state.myServices.myServices;

export default myServicesSlice.reducer;
