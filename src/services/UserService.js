import API from './api';
// import axios from 'axios';


function getListUsersAPI(token = null, email = null) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(`auth/user/list`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }

}

export { getListUsersAPI}