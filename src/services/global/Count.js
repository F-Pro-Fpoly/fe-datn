import API from '../api';
// import axios from 'axios';


function getCountAdmin({token}) {
    let headers = {};
    let url = `auth/count`;
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    return API.get(url,{headers: headers});
}




export { getCountAdmin }