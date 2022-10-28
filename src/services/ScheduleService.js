import API from './api';
// import axios from 'axios';

function createSchedule({token, data}) {
    let headers = {}
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    return API.post(`auth/schedule/create`, data ,{headers: headers});
}

function listSchedule({token, search = {}}) {
    let headers = {}
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    let url = `auth/schedule/list?`;
    for(let se in search) {
        url += `${se}=${search[se]}&`;
    }
    return API.get(url,{headers: headers});
}
function listScheduleDetail({token, search = {}}) {
    let headers = {}
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    let url = `auth/schedule/list-detail?`;
    for(let se in search) {
        url += `${se}=${search[se]}&`;
    }
    return API.get(url,{headers: headers});
}


export {createSchedule, listSchedule, listScheduleDetail}