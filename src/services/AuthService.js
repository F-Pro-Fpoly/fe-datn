import API from './api';
// import axios from 'axios';


function registerApi(data) {
    
    return API.post(`/register`, data);

}

function loginApi(data) {
    return API.post('/login', data);
}

export {registerApi, loginApi}