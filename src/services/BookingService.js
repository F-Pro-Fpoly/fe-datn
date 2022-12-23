import { compareDesc } from 'date-fns/esm';
import API from './api';
// import axios from 'axios';


function getListServiceAPI(token = null,page = 1) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        
        return API.get(`auth/booking/list?page=${page}`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }

}
function getListBookingDoctorServiceAPI(token = null, page = 1 ,search = {},user_id = null) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        let url = `auth/booking/listDoctor`
        url += `?date=${search.date}&status=${search.status}&user_id=${user_id}&code=${search.code}&is_vaccine=${search.is_vaccine}&limit=10&page=${page}`
        return API.get(url,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function getListStatuServiceAPI(token = null,status_group=null) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        let url = `auth/booking/statusBooking`
        url+= `?status_group=${status_group}`
        return API.get(url,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }

}

function updateBookingDoctorServiceAPI({token, data, id}) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        let url = `auth/booking/updateBooking/${id}`
        url+= `?_method=PUT`
        return API.post(url,data,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }

}

function getMyBookingServiceAPI(token = null, user_id = null, status_id = null) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(`auth/booking/mylist/user_id=${user_id}?status=${status_id}`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }

}


function getDetailMyBookingServiceAPI(token = null, id = null) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(`auth/booking/detail/${id}`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }

}

function cancelBookingServiceAPI(token = null, data={} , id = null) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.put(`auth/booking/updateCancel/${id}`,data,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}
function cancelBookingCodeServiceAPI(token = null, data={} , code = null) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.put(`auth/booking/updateCancel_Code/${code}`,data,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

export { getListServiceAPI,getMyBookingServiceAPI,getDetailMyBookingServiceAPI,getListBookingDoctorServiceAPI,getListStatuServiceAPI,updateBookingDoctorServiceAPI, cancelBookingServiceAPI, cancelBookingCodeServiceAPI}