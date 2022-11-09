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

function getDetailServiceAPI({token = null, id = null}) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        return API.get(`auth/page/detail/${id}`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}
function putDetailServiceAPI({token = null, id = null, data ={}}) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        return API.put(`auth/page/edit/${id}`,data,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

// function postListServiceAPI(token = null, data={}) {
    
//     try {
//         let headers ={}; 
//         if(token){
//             headers = {...headers, "Authorization": `Bearer ${token}`};
//         }
//         return API.post(`auth/page/add`,data,{headers: headers});
//     } catch (error) {
//         console.error(error);
//         return [];
//     }
// }

export { getListServiceAPI, getDetailServiceAPI, putDetailServiceAPI}