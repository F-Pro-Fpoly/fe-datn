import API from '../api';
// import axios from 'axios';


function getCityService({token, search, limit, page}) {
    let headers ={}; 
    let url = `normal/city/list-normal?`;
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    for (const key in search) {
        url += `${key}=${search[key]}&`;
    }
    if(limit && page){
        url += `limit=${limit}&page=${page}`;
    }
    return API.get(url, {headers: headers});
}

function getDistrictService({token , search, limit, page}) {
    let headers ={}; 
    let url = `normal/district/list-normal?`;
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    for (const key in search) {
        url += `${key}=${search[key]}&`;
    }
    if(limit && page){
        url += `limit=${limit}&page=${page}`;
    }
    return API.get(url, {headers: headers});
}

function getWardService({token , search, limit, page}) {
    let headers ={}; 
    let url = `normal/ward/list-normal?`;
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    for (const key in search) {
        url += `${key}=${search[key]}&`;
    }
    if(limit && page){
        url += `limit=${limit}&page=${page}`;
    }
    return API.get(url, {headers: headers});
}



export { getCityService, getDistrictService, getWardService}