export const tryLogin = async (userData) => {
    const requestUrl = 'http://admin:1111@152.67.46.150:5984/_session';

    const response = await fetch(requestUrl, {
        method: 'POST',
        body: `name=${userData.username.toLowerCase().trim()}&password=${userData.password}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
    });

    return response;
};

export const logOut = async() => {
    const requestUrl = 'http://admin:1111@152.67.46.150:5984/_session';
    const response = await fetch(requestUrl, {
        method: 'DELETE',
    });

    return response;
};

export const createUser = async (userData) => {
    const requestUrl = `http://admin:1111@152.67.46.150:5984/_users/org.couchdb.user:${userData.username.toLowerCase().trim()}`;

    const data =  {
        name: userData.username.toLowerCase().trim(),
        password: userData.password,
        roles: ['customer'],
        type: 'user',
    };

    const response = await fetch(requestUrl, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json',
        },
    });

    return response;
};
