import API from './api';
// import axios from 'axios';

function getAllRole ({token}) {
    try {
        let headers ={}; 
        let url = `auth/role/list-all`;
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        return API.get(url,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}



export { getAllRole }