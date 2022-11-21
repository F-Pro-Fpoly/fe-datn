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

export { listVaccineCategory,createVaccineCategory  }