import API from './api';
// import axios from 'axios';


function getListNewsAPI(token = null, search = {}, page = 1,category_id = null) {
    
    try {
        let headers ={}; 
        let url = `auth/news/list`;
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        search = {...search}
        url += `?page=${page}&category_id=${category_id}&category_id=${search.category_id ?? ""}`;
        return API.get(url, {headers: headers,params:search});
    } catch (error) {
        console.error(error);
        return [];
    }

}

function getListAllNewslist({token}) {
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(`auth/news/list?get=all`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function createListNewsAPI({token, data}) {
    try {
        let headers ={}; 
        let url = `auth/news/add`;
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
function deleteNewsAPI({token, id}){
    try {
        let headers = {};
        let url = `auth/news/delete/${id}`;
        if(token) {
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        return API.delete(url,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}
function getNewslist({token, id}) {
    let headers ={}; 
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    console.log();
    return API.get(`auth/news/news-detail/${id}`, {headers:headers});
}

function getListNewslistClient({token, search = {}, limit = null}) {
    let headers ={}; 
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    let url = `normal/specialist/list-specialist-client?`;
    for (const key in search) {
        url += `${search[key]}&`;
    }
    if(limit) {
        url += `limit=${limit}`;
    }
    return API.get(url, {headers:headers});
}

function getNewslistClient({token, slug}) {
    let headers ={}; 
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    let url = `normal/specialist/specialist-client/${slug}`;
    return API.get(url, {headers:headers});
}

function updateNewslist({token, data, id}) {
    let headers ={}; 
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    return API.put(`auth/news/edit/${id}`,data,{headers: headers});
}
function getList3NewsCatgory({token}) {
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(`auth/news/list-news-category?get=all`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}
function deleteCommentAPI({token, id}){
    try {
        let headers = {};
        let url = `auth/news/delete/${id}`;
        if(token) {
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        return API.delete(url,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}
function getlistComment({token, id}) {
    let headers ={}; 
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    console.log();
    return API.get(`auth/news/list_news_comment/${id}`, {headers:headers});
}

function getOneNewComment({token, id}) {
    let headers ={}; 
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    console.log();
    return API.get(`auth/news/one_news_comment/${id}`, {headers:headers});
}
function updateComment({token, data, id}) {
    let headers ={}; 
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    return API.put(`auth/news/update_news_comment/${id}`,data,{headers: headers});
}
export { 
    getListNewsAPI,createListNewsAPI,getListAllNewslist,
    getNewslist,getListNewslistClient,getNewslistClient,
    updateNewslist,getList3NewsCatgory,deleteNewsAPI,
    deleteCommentAPI,getlistComment,
    getOneNewComment,updateComment
}