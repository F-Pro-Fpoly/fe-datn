import API from '../api';
// import axios from 'axios';
function getListNewsAPI( search = {}, page = 1, limit = 6) {
    
    try {
        let headers ={}; 
        let url = `normal/news/list?`;
        for (const key in search) {
            url += `${key}=${search[key]}&`;
        }
        url += `limit=${limit}&page=${page}`;
        return API.get(url, {headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }

}

function getlistTopWeek1API() {
    try {
        let headers ={}; 
        let url = `normal/news/topWeek1?`;
        return API.get(url,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}
function getlistTopWeek3API() {
    try {
        let headers ={}; 
        let url = `normal/news/topWeek3?`;
        return API.get(url,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}
function getNewsDetailClient(token,slug) {
    let headers ={}; 
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    let url = `normal/news/news-detail/${slug}`;
    return API.get(url, {headers:headers});
}
function createCommentAPI({token, data,slug}) {
    try {
        let headers ={}; 
        let url = `auth/news_comment/add_news_comment/${slug}`;
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
function getlistComment({token, slug}) {
    let headers ={}; 
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    console.log();
    return API.get(`normal/news/news-comment/${slug}`, {headers:headers});
}
function getOneComment({token, id}) {
    let headers ={}; 
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    console.log();
    return API.get(`auth/news_comment/one_news_comment/${id}`, {headers:headers});
}
function deleteCommentAPI({token, id}){
    try {
        let headers = {};
        let url = `auth/news_comment/delete_news_comment/${id}`;
        if(token) {
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        return API.delete(url,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}
function updateComment({token, data, id}) {
    let headers ={}; 
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    return API.put(`auth/news_comment/update_news_comment/${id}`,data,{headers: headers});
}
export { getListNewsAPI,getlistTopWeek3API,getlistComment
        ,getlistTopWeek1API,getNewsDetailClient,
        createCommentAPI,deleteCommentAPI,updateComment,getOneComment
}