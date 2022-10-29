import API from "./api";

function getTimeSlotBySchedule({token, id}) {
    let headers = {};

    if(token) {
        headers = {...headers, "Authorization": `Bearer ${token}`}
    }
    let url = `auth/schedule/list-time-slot-by-schedule/${id}`;
    return API.get(url,{headers: headers});
}

export {getTimeSlotBySchedule}