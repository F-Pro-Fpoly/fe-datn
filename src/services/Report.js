import API from "./api";

function exportTurnover({token}) {
    let headers = {
        'content-type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    };
    let url = `normal/report/turnover`;
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    return API.get(url,{
        headers: headers, 
        responseType: 'blob'
    });
}

function exportBookingDay({token, params}){
    let headers = {
        'content-type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    };
    let url = `normal/report/bookingDay`;
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    return API.get(url,{
        headers: headers, 
        responseType: 'blob',
        params: params
    });
}

function exportBooking({token, params}) {
    let url = `normal/report/bookingCode`;
    let headers = {
        'content-type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    };
    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`};
    }
    return API.get(url,{
        headers: headers, 
        responseType: 'blob',
        params: params
    });
}


export {exportTurnover, exportBookingDay, exportBooking}