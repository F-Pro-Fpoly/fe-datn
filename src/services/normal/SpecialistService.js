import API from '../api';
// import axios from 'axios';


function getListServiceAPI(search = {}) {
    
    try {
        let headers ={}; 
        let url = `normal/specialist/listSpecialist`;
        url += `?status=${search.status??""}`;
        return API.get(url, {headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function getlistSpecialistFeatureAPI() {
    
    try {
        let headers ={}; 
        let url = `normal/specialist/listSpecialistFeature5`;
        return API.get(url, {headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}



export { getListServiceAPI, getlistSpecialistFeatureAPI}