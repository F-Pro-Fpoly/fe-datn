import API from '../api';
// import axios from 'axios';


function getListNewsAPI(search = {}, page = 1,token = null,status=1) {
    try {
        let headers ={}; 
        let url = `normal/news/list-news?page=${page}?status=${status}`;
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        url += `?status=${search.status??""}`;
        return API.get(url, {headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function getlistNewsFeatureAPI({token}) {
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
function getlistNews3NewsAPI({token}) {
    try {
        let headers ={}; 
        let url = `normal/news/news-new`;
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
function getlistNews9FeaturedAPI({token}) {
    try {
        let headers ={}; 
        let url = `normal/news/featured`;
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

export { getListNewsAPI, getlistNewsFeatureAPI,getlistNews9FeaturedAPI
        ,getlistNews3NewsAPI,getNewsDetailClient,getlistNewsCategoryAPI
}