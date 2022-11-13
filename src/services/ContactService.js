import API from './api';
// import axios from 'axios';



function creatContactApi({data}) {
    try {
        let headers ={}; 
        let url = `normal/contact/add`;
        return API.post(url, data,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function deleteContact({token, id}){
    try {
        let headers = {};
        let url = `normal/contact/delete/${id}`;
        if(token) {
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        return API.delete(url,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}



function getContact({token, id}) {
    let headers = {};
    let url = `auth/contact/${id}`;
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    return API.get(url,{headers: headers});
}

function getListContactAPI(token = null, search = {}, page = 1) {
    
    try {
        let headers ={}; 
        let url = `auth/contact/list`;
        if(token){
            headers = {...headers};
            // console.log(configs);
        }
        url += `?page=${page}&name=${search.name ?? ""}&email=${search.email??""}&active=${search.active??""}&role_code=${search.role_code??""}&department_id=${search.department_id??""}&username=${search.username ?? ""}`;
        return API.get(url, {headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }

}

export { creatContactApi, deleteContact,getContact,getListContactAPI }