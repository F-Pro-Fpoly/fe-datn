// import API from '../api';
import axios from 'axios';

function getChartCovidService () {
    try {
        let headers ={}; 
      
        return axios.get("https://static.pipezero.com/covid/data.json",{headers: headers});
    } catch (error) {
        console.error(error);
        return [];
    }
}




export {getChartCovidService}