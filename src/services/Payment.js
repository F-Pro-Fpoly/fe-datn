import API from './api';
// import axios from 'axios';


function paymentVNPAY({data, token}) {
    
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        let url = `normal/PaymentVNPAY`;
        return API.post(url, data ,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }

}

export {paymentVNPAY}