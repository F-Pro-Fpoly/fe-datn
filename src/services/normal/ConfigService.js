import API from '../api';
// import axios from 'axios';


function ListConfigService() {
    
    try {
        let headers ={}; 
        // if(token){
        //     headers = {...headers, "Authorization": `Bearer ${token}`};
        // }
        return API.get(`normal/setting/listSetting`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}


export { ListConfigService}