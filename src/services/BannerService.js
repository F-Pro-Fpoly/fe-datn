import API from './api';
// import axios from 'axios';

// function PostNewsletter({data,token}) {
//     try {
//         let headers ={}; 
//         let url = `normal/newsletter/add_newsletter`;
//         if(token) {
//             headers = {...headers, "Authorization": `Bearer ${token}`};
//         }
//         return API.post(url, data,{headers: headers});
//     } catch (error) {
//         console.error(error);
//         return [];
//     }
// }

function getListBanner({token,page=1}) {
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(`auth/banner/list?&page=${page}&limit=5`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

export { getListBanner }