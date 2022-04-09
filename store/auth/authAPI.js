export const tryLogin = async (userData) => {
    const requestUrl = "http://152.67.46.150:5984/_session";

    const response = await fetch(requestUrl, {
        method: 'POST', 
        body: `name=${userData.username.toLowerCase()}&password=${userData.password}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic YWRtaW46MTExMQ==', 
        }
    });

    return response;
} 

export const logOut = async() => {
    const requestUrl = "http://152.67.46.150:5984/_session";
    const response = await fetch(requestUrl, {
        method: 'DELETE', 
    });

    return response;
}

export const createUser = async (userData) => {
    const requestUrl = `http://152.67.46.150:5984/_users/org.couchdb.user:${userData.username.toLowerCase()}`;

    const data =  {
        name: userData.username.toLowerCase(),
        password: userData.password,
        roles: ["customer"],
        type: "user"
    };

    const response = await fetch(requestUrl, {
        method: 'PUT', 
        body: JSON.stringify(data), 
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Basic YWRtaW46MTExMQ==', 
        }
    });

    return response;
}

export const createUserDB = async (username) => {
    const requestUrl = `http://152.67.46.150:5984/user_${username.toLowerCase()}`; 

    const response = await fetch(requestUrl, {
        method: 'PUT', 
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Basic YWRtaW46MTExMQ==', 
        }
    });

    return response;
}

export const configureUserDB = async (username) => {
    const requestUrl = `http://152.67.46.150:5984/user_${username.toLowerCase()}/_security`; 

    const data = {
        members: {
            names: [username.toLowerCase()],
            roles: [
                "_admin"
            ]
        },
        admins: {
            roles: [
                "_admin"
            ]
        }
    }
    
    const response = await fetch(requestUrl, {
        method: 'PUT', 
        body: JSON.stringify(data), 
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Basic YWRtaW46MTExMQ==', 
        }
    });

    return response;
}