import API from '../api';
// import axios from 'axios';


function uploadFileService({token, data}) {
    
    let headers ={}; 
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    return API.post(`normal/upload-file`, data,{headers: headers});
}


export { uploadFileService }