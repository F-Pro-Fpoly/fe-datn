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
    let url = `auth/vaccine/update/${id}`;
    url += `?_method=PUT`
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    return API.post(url, data,{headers: headers});
}
export {createVaccineService,listVaccine,deleteVaccine,updateVaccine}