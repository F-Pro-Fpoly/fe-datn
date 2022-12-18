import API from './api';
// import axios from 'axios';

function creatContactApi(data={}) {
    try {
        let headers ={}; 
        let url = `normal/contact/add?type=0&`;
        return API.post(url, data,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function deleteContact({token, id}){
    try {
        let headers = {};
        let url = `auth/contact/delete/${id}`;
        if(token) {
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        return API.delete(url,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}



function getContact({token,page=1,search ={}, type= null}) {
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(`auth/contact/list?type=${type}&page=${page}&limit=5&status_id=${search.status}`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}


function getDetailContact({token,id}) {
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(`auth/contact/detail/${id}`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function putReplyContact({token,id,data}) {
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        let url = `auth/contact/replyContact/${id}`
        url += `?_method=PUT`
        return API.post(url,data,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}


function getListContactAPI(token = null, search = {}, page = 1) {
    
    try {
        let headers ={}; 
        let url = `normal/contact/list`;
        if(token){
            headers = {...headers};
            // console.log(configs);
        }
        url += `?page=${page}&name=${search.name ?? ""}&email=${search.email??""}&contents=${search.contents??""}&phone=${search.phone??""}`;
        return API.get(url, {headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }

}
function deleteContactBookings({token, id}){
    try {
        let headers = {};
        let url = `auth/contact/delete/${id}`;
        if(token) {
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        return API.delete(url,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}



export { creatContactApi, deleteContact,getContact,getListContactAPI, getDetailContact,putReplyContact,deleteContactBookings}
