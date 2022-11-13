import API from './api';
// import axios from 'axios';


function getListSettingServiceAPI({token = null,page=1}) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(`auth/setting/list?page=${page}`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }

}
function getDetailSettingServiceAPI({token = null,id}) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(`auth/setting/detail/${id}`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function postSettingServiceAPI({token = null, data={}}) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.post(`auth/setting/add`,data,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function putSettingServiceAPI({token = null, id = null,data={}}) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.put(`auth/setting/edit/${id}`,data,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
    
}

function deleteSettingServiceAPI (id = null , token = null ){
    try {
        let headers = {};
        if(token) {
            headers = {...headers, "Authorization" : `Bearer ${token}` };
        }
        return API.delete(`auth/setting/delete/${id}`,{headers: headers} );
    } catch (error) {
        console.error(error);
        return [];
    }
}

export { getListSettingServiceAPI, postSettingServiceAPI, deleteSettingServiceAPI,getDetailSettingServiceAPI, putSettingServiceAPI}