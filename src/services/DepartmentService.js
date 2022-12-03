import API from './api';


function createDepartmentApi({token, data}){
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.post(`auth/department/add`, data,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function getDepartment({token, search, page = 1}) {
    let headers ={}; 
    let url = '';
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    if(search){

    }else{
        url = `auth/department/list?page=${page}`;
    }

    return API.get(url,{headers: headers});
}

function getDepartmentOne({token, id}) {
    let headers ={}; 
    let url = '';
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    url = `auth/department/detail/${id}`;

    return API.get(url,{headers: headers});
}

function updateDepartment({token, id, data}) {
    let headers ={}; 
    let url = '';
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    url = `auth/department/edit/${id}`;

    return API.put(url, data,{headers: headers});
}
function deleteDepartment({token, id}){
    try {
        let headers = {};
        let url = `auth/department/delete/${id}`;
        if(token) {
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        return API.delete(url,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

export  {createDepartmentApi, getDepartment, getDepartmentOne, updateDepartment,deleteDepartment};
