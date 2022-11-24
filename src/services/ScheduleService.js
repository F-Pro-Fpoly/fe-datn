import API from './api';
// import axios from 'axios';

function createSchedule({token, data, search={}}) {
    let headers = {}
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    return API.post(`auth/schedule/add`, data ,{headers: headers});
}

function listScheduleApi({token, search = {}}) {
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

function listTimeslot({token, search = {}}) {
    let headers = {}

    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    let url = `auth/timeslot/list?`;
    for(let se in search) {
        url += `${se}=${search[se]}&`;
    }
    return API.get(url,{headers: headers});
}

function getScheduleByDate({token, search = {}, id}) {
    let headers = {}

    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    let url = `normal/schedule/get-by-date/${id}?`;
    for(let se in search) {
        url += `${se}=${search[se]}&`;
    }
    return API.get(url,{headers: headers});
}


export {createSchedule, listScheduleApi, listScheduleDetail, listTimeslot, getScheduleByDate}