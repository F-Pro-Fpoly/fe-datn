import API from './api';
// import axios from 'axios';


function getPostsAPI() {
    
    try {
        return API.get(`/posts?limit=10`);
    } catch (error) {
        console.error(error);
        return [];
    }

}

export {getPostsAPI}