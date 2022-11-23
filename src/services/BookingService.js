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
function getListBookingDoctorServiceAPI(token = null,search = {},user_id = null) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        let url = `auth/booking/listDoctor`
        url += `?date=${search.date}&status=${search.status}&user_id=${user_id}`
        return API.get(url,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function getListStatuServiceAPI(token = null) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        let url = `auth/booking/statusBooking`
        return API.get(url,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }

}

function getMyBookingServiceAPI(token = null, user_id = null) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(`auth/booking/mylist/user_id=${user_id}`,{headers: headers});
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

// function postListServiceAPI(token = null, data={}) {
    
//     try {
//         let headers ={}; 
//         if(token){
//             headers = {...headers, "Authorization": `Bearer ${token}`};
//             // console.log(configs);
//         }
//         return API.post(`auth/sick/add`,data,{headers: headers});
//     } catch (error) {
//         console.error(error);
//         return [];
//     }
// }

export { getListServiceAPI,getMyBookingServiceAPI,getDetailMyBookingServiceAPI,getListBookingDoctorServiceAPI,getListStatuServiceAPI}