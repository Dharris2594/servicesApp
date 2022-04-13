
export const syncDB = (username) => {

    handlerSync = PouchDB.sync(remoteDb, localDb, {
        live: true,
        retry: true,
        selector: {
            "userId": `org.couchdb.user:${username.toLowerCase()}`
        }
    })
    .on('change', (info) => {
        // console.log(TAG, 'sync onChange', info)
    })
    .on('paused', (err) => {
        
    })
    .on('active', () => {
        // console.log(TAG, 'sync onActive')
    })
    .on('denied', (err) => {
        // console.log(TAG, 'sync onDenied', err)
    })
    .on('complete', (info) => {
        // console.log(TAG, 'sync onComplete', info)
    })
    .on('error', (err) => {
        // console.log(TAG, 'sync onError', err)
    })
}

export const getMyServices = () => {
    localDb.find({
        fields: ['_id', 'title', 'rating', 'categoryId']
    }).then(result => {
        return result;
    }).catch(err => {
        return err;
    });
}