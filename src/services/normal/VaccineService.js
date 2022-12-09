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

function getListVaccineNormalApi({token, params}) {
    let headers ={}; 
    let url = `normal/vaccine/list`;
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }

    return API.get(url, {headers: headers, params: params});
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
function getListVaccineCateAPI({token,active=1}) {
    try {
        let headers ={}; 
        let url = `normal/vaccine_category/list_dmCategory?active${active}`;
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(url,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}
function getListCateAPI({token,id}) {
    try {
        let headers ={}; 
        let url = `normal/vaccine/list_dm?category_ids${id}`;
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(url,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}


export { getListServiceAPI, getDetailSereiceAPI, getListVaccineNormalApi,getListVaccineCateAPI,getListCateAPI}