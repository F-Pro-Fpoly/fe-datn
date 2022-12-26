import API from './api';
// import axios from 'axios';


function getListNewsCatgoryAPI(token = null, search = {},page = 1) {
    
    try {
        let headers ={}; 
        let url = `auth/news_category/list`;
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        search = {...search}
        url += `?page=${page}`;
        return API.get(url, {headers: headers,params: search});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function getListAllNewsCatgory({token}) {
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(`auth/news_category/list?get=all`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}
function createNewsCatgoryAPI({token, data}) {
    try {
        let headers ={}; 
        let url = `auth/news_category/add`;
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.post(url, data,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}
function getNewsCatgorylist({token, id}) {
    let headers ={}; 
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    console.log();
    return API.get(`auth/news_category/news-categoryID/${id}`, {headers:headers});
}

function updateNewsCatgory({token, data, id}) {
    let headers ={}; 
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    return API.put(`auth/news_category/edit/${id}`,data,{headers: headers});
}
function deleteNewsCategory({token, id}){
    try {
        let headers = {};
        let url = `auth/news_category/delete/${id}`;
        if(token) {
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        return API.delete(url,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}
export { 
    getListAllNewsCatgory,getListNewsCatgoryAPI,getNewsCatgorylist,createNewsCatgoryAPI,updateNewsCatgory,deleteNewsCategory
}