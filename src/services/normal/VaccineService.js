import API from '../api';
// import axios from 'axios';


function getListServiceAPI(active = null, search = '') {
    
    try {
        let headers ={}; 
        let url = `normal/vaccine/list`;
        url += `?is_active=${active}&name=${search}`;
        return API.get(url, {headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function getDetailSereiceAPI(id = null) {
    
    try {
        let headers ={}; 
        let url = `normal/vaccine/detail/${id}`;
        return API.get(url, {headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}



export { getListServiceAPI, getDetailSereiceAPI}