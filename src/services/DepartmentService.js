import API from './api';


class DepartmentService {
    constructor() {

    }

    createDepartmentApi = (token, data) =>{
        try {
            let headers ={}; 
            if(token){
                headers = {...headers, "Authorization": `Bearer ${token}`};
                // console.log(configs);
            }
            return API.get(`auth/specialist/list?page=${page}`,{headers: headers});
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}


export default DepartmentService;
