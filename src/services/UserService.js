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

function getListUsersV2_1({token, search = {}}) {
    let headers ={}; 
    let url = `auth/user/list-v2?`;
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    for(let se in search) {
        url += `${se}=${search[se]}&`;
    }

    return API.get(url, {headers: headers});
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
function EditUserApi({token, data}) {
    try {
        let headers ={}; 
        let url = `auth/user/edit`;
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.put(url, data,{headers: headers});
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
    url += `?_method=PUT`
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    return API.post(url, data,{headers: headers});
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
    url += `?_method=PUT`
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    return API.post(url, data,{headers: headers});
}


function getInfo({token}) {
    let headers = {};
    let url = "auth/user/info";
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    return API.get(url,{headers: headers});
}


function getInfoDoctor({token,id}) {
    let headers = {};
    let url = `normal/doctor-profile/detail/${id}`;
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    return API.get(url,{headers: headers});
}

function getInfoDoctorV2({token,id}) {
    let headers = {};
    let url = `normal/user/infoDoctor/${id}`;
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    return API.get(url,{headers: headers});
}
function DoctorProfile({token,id}) {
    let headers = {};
    let url = `auth/doctor-profile/detail/${id}`;
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    return API.get(url,{headers: headers});
}
function DoctorAddProfile({token,data= {}}) {
    let headers = {};
    let url = `auth/doctor-profile/add`;
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    return API.post(url,data,{headers: headers});
}
function UpdateDoctorProfile({token,id,data={}}) {
    let headers = {};
    let url = `auth/doctor-profile/edit/${id}`;
    url += `?_method=PUT`
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }else{
        throw "Bạn chưa đăng nhập"
    }
    return API.post(url,data,{headers: headers});
}

function getListUsersV2({token, search = {}, limit = 6, page = 1}) {
    try {
        let headers ={}; 
        let url = `normal/user/list?`;
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        for (const key in search) {
            url += `${key}=${search[key]}&`;
        }
        url += `limit=${limit}&page=${page}`;
        return API.get(url, {headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function updateUserClient ({token, data}) {
    let headers = {};
    let url = "normal/user/update-client";
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }else{
        throw "Bạn chưa đăng nhập";
    }
    return API.put(url, data,{headers: headers});
}

function getUserClientService({token}) {
    let headers = {};
    let url = "normal/user/get-user";
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }else{
        throw "Bạn chưa đăng nhập";
    }
    return API.get(url,{headers: headers});
}
export { getListUsersAPI, createUserApi, deleteUser, updateUser, getUser,updateUserByName ,getInfo ,updatePassWord, getListUsersV2, getInfoDoctor, updateUserClient, getUserClientService, getListUsersV2_1,DoctorProfile,UpdateDoctorProfile,DoctorAddProfile, EditUserApi,getInfoDoctorV2}
