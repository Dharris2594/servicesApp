import PouchDB from './pouchdb.js';

export const remoteServiceDb = new PouchDB('http://admin:1111@152.67.46.150:5984/services', {skip_setup: true});
export const remoteRequestDb = new PouchDB('http://admin:1111@152.67.46.150:5984/requests',{skip_setup: true});
export const localServiceDb = new PouchDB('services', { adapter: 'react-native-sqlite' });
export const localRequestDB = new PouchDB('requests', { adapter: 'react-native-sqlite' });
