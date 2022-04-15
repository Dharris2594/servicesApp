import PouchDB from './pouchdb.js';

export const remoteDb = new PouchDB('http://admin:1111@152.67.46.150:5984/services', {skip_setup: true});
export const localDb = new PouchDB('services', { adapter: 'react-native-sqlite' });
