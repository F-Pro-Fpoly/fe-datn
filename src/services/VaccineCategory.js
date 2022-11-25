import API from './api';
// import axios from 'axios';
function listVaccineCategory ({token, search = {}, limit = null, page = null}) {
    let headers ={}; 
    let url = `auth/vaccine-category/list?`;
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

function createVaccineCategory({token, data}) {
    let headers ={}; 
    let url = `auth/vaccine-category/create?`;
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }

    return API.post(url,  data,{headers: headers});
}

function updateCategory({token, data, id}) {
    let headers ={}; 
    let url = `auth/vaccine-category/update/${id}?`;
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }

    return API.put(url,  data,{headers: headers});
}

function getCategoryApi({token, id}) {
    let headers ={}; 
    let url = `auth/vaccine-category/${id}`;
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }

    return API.get(url, {headers: headers});
}

export { listVaccineCategory,createVaccineCategory, updateCategory, getCategoryApi }