import API from './api';
// import axios from 'axios';


function getListUsersAPI(token = null, search = {}, page = 1) {
    
    try {
        let headers ={}; 
        let url = `auth/user/list`;
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        url += `?page=${page}&name=${search.name ?? ""}&email=${search.email??""}&active=${search.active??""}&role_code=${search.role_code??""}&department_id=${search.department_id??""}&username=${search.username ?? ""}`;
        return API.get(url, {headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }

}

function createUserApi({token, data}) {
    try {
        let headers ={}; 
        let url = `auth/user/add`;
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.post(url, data,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function deleteUser({token, id}){
    try {
        let headers = {};
        let url = `auth/user/delete/${id}`;
        if(token) {
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        return API.delete(url,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function updateUser({token, id, data}){
    let headers = {};
    let url = `auth/user/update/${id}`;
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    return API.put(url, data,{headers: headers});
}

function getUser({token, id}) {
    let headers = {};
    let url = `auth/user/${id}`;
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    return API.get(url,{headers: headers});
}

function updateUserByName({token, data}) {
    let headers = {};
    let url = `auth/user/updateByName`;
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    return API.put(url, data,{headers: headers});
}
function updatePassWord({token, data, id}) {
    let headers = {};
    let url = `auth/user/changePassword/${id}`;
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    return API.put(url, data,{headers: headers});
}


function getInfo({token}) {
    let headers = {};
    let url = "auth/user/info";
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    return API.get(url,{headers: headers});
}


export { getListUsersAPI, createUserApi, deleteUser, updateUser, getUser,updateUserByName ,getInfo ,updatePassWord}