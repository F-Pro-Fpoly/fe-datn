import API from '../api';
// import axios from 'axios';


function getListServiceAPI() {
    
    try {
        let headers ={}; 
        // if(token){
        //     headers = {...headers, "Authorization": `Bearer ${token}`};
        // }
        return API.get(`normal/specialist/listSpecialist`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}


export { getListServiceAPI}