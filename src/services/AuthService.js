import API from './api';
// import axios from 'axios';


function registerApi(data) {
    
    return API.post(`/register`, data);

}

function loginApi(data) {
    return API.post('/login', data);
}

function forgetPassApi(data) {
    return API.post('/normal/user/forgetPass', data);
}


function changePassApi({data, id}) {
    return API.post(`/normal/user/ChangePass/${id}`, data);
}

export {registerApi, loginApi, forgetPassApi,changePassApi}