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

export {createVaccineService}