import API from './api';
// import axios from 'axios';


function getListServiceAPI(token = null, search = {}, page = 1) {
    
    try {
        let headers ={}; 
        let url = `auth/sick/list`;
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        url += `?page=${page}&code=${search.code ?? ""}&name=${search.name ?? ""}&slug=${search.slug??""}`;
        return API.get(url, {headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }

}
function getListServiceV2({token, search={}}) {
    let headers ={}; 
    let url = `auth/sick/list?`;
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    for(let se in search) {
        url += `${se}=${search[se]}&`;
    }
    return API.get(url,{headers: headers});
}
function postListServiceAPI(token = null, data={}) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.post(`auth/sick/add`,data,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}
function deleteSicks({token, id}){
    try {
        let headers = {};
        let url = `auth/sick/delete/${id}`;
        if(token) {
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        return API.delete(url,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function updateSicks({token, data, id}) {
    let headers ={}; 
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    return API.put(`auth/sick/edit/${id}`,data,{headers: headers});
}


function getSicks({token, id}) {
    let headers = {};
    let url = `auth/sick/detail/${id}`;
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    return API.get(url,{headers: headers});
}

export { getListServiceAPI, postListServiceAPI, getListServiceV2,deleteSicks,updateSicks,getSicks}