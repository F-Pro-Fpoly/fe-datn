import API from '../api';
// import axios from 'axios';


function getListServiceAPI(param = {}) {
    
    try {
        let headers ={}; 
        console.log(param.status);
        return API.get(`normal/specialist/listSpecialist?status=${param.status ?? ""}`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}


export { getListServiceAPI}