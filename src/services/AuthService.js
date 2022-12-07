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

export {registerApi, loginApi, loginGoogleApi}