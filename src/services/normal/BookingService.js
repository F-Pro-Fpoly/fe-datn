import API from '../api';
// import axios from 'axios';

function createBookingService ({token, data}) {
    let headers ={}; 
    let url = `normal/booking/create-booking`;
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    return API.post(url, data,{headers: headers});
}

function createBookingVaccineService ({token, data}) {
    if(!token) {
        throw "Bạn chưa đăng nhập";
    }
    let headers ={}; 
    let url = `normal/booking/create-booking-vaccine`;
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    return API.post(url, data,{headers: headers});
}



export {createBookingService, createBookingVaccineService}