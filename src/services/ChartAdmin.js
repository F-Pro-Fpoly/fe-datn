import API from './api';
// import axios from 'axios';


function getListServiceAPI(token = null) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        return API.get(`auth/statistic/list`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}
function getChartServiceAPI(token = null) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        return API.get(`auth/statistic/chart`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}



export { getListServiceAPI ,getChartServiceAPI}