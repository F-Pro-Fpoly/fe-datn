import API from './api';
// import axios from 'axios';

function creatContactApi({data,token}) {
    try {
        let headers ={}; 
        let url = `normal/contact/add`;
        if(token) {
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
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



function getContact({token,page=1}) {
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(`auth/contact/list?type=0&page=${page}`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function getContactBooking({token, page=1}) {
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(`auth/contact/list?type=1&page=${page}`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}
function getListContactAPI(token = null, search = {}, page = 1) {
    
    try {
        let headers ={}; 
        let url = `normal/contact/list`;
        if(token){
            headers = {...headers};
            // console.log(configs);
        }
        url += `?page=${page}&name=${search.name ?? ""}&email=${search.email??""}&contents=${search.contents??""}&phone=${search.phone??""}`;
        return API.get(url, {headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }

}


export { creatContactApi, deleteContact,getContact,getListContactAPI,getContactBooking}

