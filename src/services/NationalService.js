import API from './api';

function getNationalService({token, search, limit = null, page = null}) {
    let headers = {}; 
    let url = `auth/national/list?`;
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    for(let se in search) {
        url += `${se}=${search[se]}&`;
    }
    if(limit) {
        url += `limit=${limit}&`;
    }
    if(page) {
        url += `page=${page}&`;
    }

    return API.get(url, {headers: headers});
}

export {
    getNationalService
}