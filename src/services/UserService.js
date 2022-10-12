import API from './api';
// import axios from 'axios';


function getListUsersAPI(token = null, email = null, page = 1) {
    
    try {
        let headers ={}; 
        let url = `auth/user/list`;
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        if(page != 1){
            url += `?page=${page}`;
        }
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


export { getListUsersAPI, createUserApi}