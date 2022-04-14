import PouchDB from './pouchdb.js';

export const remoteServiceDb = new PouchDB('http://admin:1111@152.67.46.150:5984/services');
export const remoteRequestDb = new PouchDB('http://admin:1111@152.67.46.150:5984/requests');
export const localServiceDb = new PouchDB('services', { adapter: 'react-native-sqlite' });
export const localRequestDB = new PouchDB('requests', { adapter: 'react-native-sqlite' });
