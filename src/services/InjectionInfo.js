import API from './api';

function updateInjectionInfo({token, data}) {
    let headers ={}; 
    let url = `auth/injection-info/update`;
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    return API.put(url ,data,{headers: headers});
}

export {
    updateInjectionInfo
}