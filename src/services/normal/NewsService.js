import API from '../api';
// import axios from 'axios';




function getlistNewsFeatureAPI(token=null) {
    try {
        let headers ={}; 
        let url = `normal/news/list-news-all`;
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(url, {headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function getListNewsAPI(token, search = {}, page = 1, limit = 6) {
    
    try {
        let headers ={}; 
        let url = `normal/news/list?`;
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
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

function getlistTopWeek1API(token) {
    try {
        let headers ={}; 
        let url = `normal/news/topWeek1`;
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(url, {headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}
function getlistTopWeek3API(token) {
    try {
        let headers ={}; 
        let url = `normal/news/topWeek3`;
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(url, {headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}
function getNewsDetailClient({token, slug}) {
    let headers ={}; 
    if(token){
        headers = {...headers, "Authorization": `Bearer ${token}`};
        // console.log(configs);
    }
    let url = `normal/news/news-detail/${slug}`;
    return API.get(url, {headers:headers});
}
function getlistNewsCategoryAPI() {
    try {
        let headers ={}; 
        let url = `normal/news/list-news-catagory`;
        return API.get(url, {headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

export { getListNewsAPI, getlistNewsFeatureAPI,getlistTopWeek3API
        ,getlistTopWeek1API,getNewsDetailClient,getlistNewsCategoryAPI
}