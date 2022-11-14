import API from './api';
// import axios from 'axios';


function getListServiceAPI(token = null,page=1) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(`auth/specialist/list?page=${page}`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function getListAllSpecialist({token}) {
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(`auth/specialist/list?get=all`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function postListServiceAPI(token = null, data={}) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.post(`auth/specialist/add`,data,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function getSpecialist({token, id}) {
    let headers ={}; 
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    console.log();
    return API.get(`auth/specialist/detail/${id}`, {headers:headers});
}

function getListSpecialistClient({token, search = {}, limit = null}) {
    let headers ={}; 
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    let url = `normal/specialist/list-specialist-client?`;
    for (const key in search) {
        url += `${search[key]}&`;
    }
    if(limit) {
        url += `limit=${limit}`;
    }
    return API.get(url, {headers:headers});
}

function getSpecialistClient({token, slug}) {
    let headers ={}; 
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    let url = `normal/specialist/specialist-client/${slug}`;
    return API.get(url, {headers:headers});
}

function updateSpecialist({token, data, id}) {
    let headers ={}; 
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    return API.put(`auth/specialist/edit/${id}`,data,{headers: headers});
}

export { 
    getListServiceAPI,postListServiceAPI, getListAllSpecialist, 
    getSpecialist, getListSpecialistClient, getSpecialistClient, updateSpecialist
}