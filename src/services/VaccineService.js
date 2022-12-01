import API from './api';
// import axios from 'axios';
function createVaccineService({token, data}) {
    let headers ={}; 
    let url = `auth/vaccine/add`;
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }

    return API.post(url,  data,{headers: headers});
}

function listVaccine ({token, search = {}, limit = null, page = null}) {
    let headers ={}; 
    let url = `auth/vaccine/list?`;
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


function deleteVaccine({token, id}){
    try {
        let headers = {};
        let url = `auth/vaccine/delete/${id}`;
        if(token) {
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        return API.delete(url,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function updateVaccine({token, id, data}){
    let headers = {};
    let url = `auth/vaccine/edit/${id}`;
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    return API.put(url, data,{headers: headers});
}

function getVaccineApi({token, id}) {
    let headers ={}; 
    let url = `auth/vaccine/${id}`;
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }

    return API.get(url, {headers: headers});
}

function getVaccineApiByCode ({token, code}) {
    let headers ={}; 
    let url = `normal/vaccine/detail-by-code/${code}`;
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }

    return API.get(url, {headers: headers});
}

export {createVaccineService,listVaccine,deleteVaccine,updateVaccine,getVaccineApi,getVaccineApiByCode}