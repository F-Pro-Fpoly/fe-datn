import API from './api';
// import axios from 'axios';


function getListServiceAPI(token = null,page=1) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        return API.get(`auth/page/list?page=${page}`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function postListServiceAPI(token = null, data={}) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        return API.post(`auth/page/add`,data,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

export { getListServiceAPI,postListServiceAPI}