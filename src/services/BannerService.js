import API from './api';
// import axios from 'axios';

function Postslider({data,token}) {
    try {
        let headers ={}; 
        let url = `auth/banner/add`;
        if(token) {
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        return API.post(url, data,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function Putslider({data,token,id}) {
    try {
        let headers ={}; 
        let url = `auth/banner/edit/${id}`;
        url +="?_method=PUT"
        if(token) {
            headers = {...headers, "Authorization": `Bearer ${token}`};
        }
        return API.post(url, data,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

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

function getListBannerNormal({token}) {
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(`normal/banner/listBannerNormal?&status=1`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

function getDetailBanner({token,id}) {
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.get(`auth/banner/detail/${id}`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}


function deleteBanner({token,id}) {
    try {
        let headers ={}; 
        if(token){
            headers = {...headers, "Authorization": `Bearer ${token}`};
            // console.log(configs);
        }
        return API.delete(`auth/banner/delete/${id}`,{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}

export { getListBanner ,Postslider, getDetailBanner, Putslider, deleteBanner, getListBannerNormal}