import API from './api';
// import axios from 'axios';


function registerApi(data) {
    
    return API.post(`/register`, data);
}



function loginApi(data) {
    return API.post('/login', data);
}

function loginGoogleApi ({data}) {
    let headers = {};
    let url = `/login-google`;
    return API.post(url, data,{headers: headers});
}

function forgetPassApi(data) {
    return API.post('/normal/user/forgetPass', data);
}


function changePassApi({data, id}) {
    return API.post(`/normal/user/ChangePass/${id}`, data);
}

function refreshToken ({token}) {
    let headers = {};
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    let url = `/refresh`;
    return API.get(url,{headers: headers});
}

export {registerApi, loginApi, loginGoogleApi, forgetPassApi,changePassApi, refreshToken}