import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getScheduleByDate } from "../../../services/ScheduleService";
import {setLoading} from "../../../redux/slices/InterfaceSile";
import { getSpecialistClient } from "../../../services/SpecialistService";

function ClinicUiTime({dataItem}) {
    const [item, setItem] = useState(dataItem);
    const [timeSlots, setTimeSlot] = useState(dataItem.schedule_data ?? []);
    const [date, setDate] = useState(dataItem.schedule_date);
    const [interval, setinterval] = useState("M");
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    const param = useParams();
    let slug = param.slug;
    const navigate = useNavigate();
    // const loading = useSelector(state => state.interface.loading)

    const handleDateInput = async (e) => {
        let dateInputValue = e.target.value;
        // console.log(dateInputValue);
        setDate(dateInputValue);
        setinterval("M")
        dispatch(setLoading(true));
        try {
            let res = await getScheduleByDate({token, search:{
               date : dateInputValue,
               interval : interval
            }, id: item.id})
            let data = res.data.data;
            // console.log(data);
            setTimeSlot(data.schedule_data);
            dispatch(setLoading(false));

        } catch (error) {
            dispatch(setLoading(false));

        }
    }
    const handleIntervalInput = async (e) => {
     
        let intervalInputValue = e.target.value;
        setinterval(intervalInputValue);
        dispatch(setLoading(true));
        try {
            let res = await getScheduleByDate({token, search:{
               date : date,
               interval : intervalInputValue
            }, id: item.id})
            let data = res.data.data;
            // console.log(data);
            setTimeSlot(data.schedule_data);
            dispatch(setLoading(false));

        } catch (error) {
            dispatch(setLoading(false));

        }
    }

    const saveBookingInfo2 = async (val) => {
        // e.preventDefault();
        
        try {
            let res = await getSpecialistClient({token, slug});
            let dataRes = res.data.data;
            let data = {
                ...val,
                ...dataRes,
                'doctor_name': dataItem.name,
                'doctor_username' :dataItem.username,
                'doctor_id': dataItem.id,
                'doctor_email': dataItem.email,
                'date':date,
                'schedule_id': val.id
            };
            console.log(val);
            sessionStorage['booking_info2'] = JSON.stringify(data);
            console.log("save booking");
            navigate("/dang-ky-lich")
            
        } catch (error) {
            
        }
    }

    return ( 
        <>           
            <div className="image">
                <img src={`${item.avatar}`} alt="" />
                <Link to={"/doi-ngu-bac-si/"+item.slug_name+"/"+item.id}>Xem thêm</Link>
            </div>
            <div className="infocontent"> 
                <h3>{item.name}</h3>
                <span className="infocontent-info">{item.user_info}</span>          
            </div>

            <div className="schedule">
                <div className="mb-3 schedule-top">         
                    {/* <select name="" className="form-control col-4"  id="" onChange={(e)=>handleDateInput(e)} style={{
                        marginRight:"5%"
                    }}>
                        {item.schedule_dates.map((val, index) => (
                            <option value={val.date} key={index}>{val.date_format}</option>
                        ))}                     
                    </select>
       
                    <select name="" className="form-control col-4"  id="" onChange={(e)=>handleIntervalInput(e)}>
                        <option value="M">Buổi sáng</option>  
                        <option value="A">Buổi chiều</option>  
                    </select> */}
                    {
                        item.schedule_dates.length == 0 ? 
                        "" :
                        <>
                            <div className="col-xl-4 col-md-4 col-12">
                                <select name="" className="form-control"  id="" onChange={(e)=>handleDateInput(e)}>
                                    {item.schedule_dates.map((val, index) => (
                                        <option value={val.date} key={index}>{val.date_format}</option>
                                    ))}                     
                                </select>
                            </div>
                            <div className="col-xl-4 col-md-4 col-12">
                                <select name="" className="form-control"  id="" onChange={(e)=>handleIntervalInput(e)}>
                                    <option value="M">Buổi sáng</option>  
                                    <option value="A">Buổi chiều</option>  
                                </select>
                            </div>
                        </>
                    }
                  

                </div>
                <div className="title">
                    <i className="fa-solid fa-calendar-days"></i>&nbsp;
                    <span>LỊCH KHÁM</span>
                </div>
                <div className="row schedule-time">


                    { 
                    timeSlots.length > 0 ? 
                    timeSlots.map((val, index) => (
                        <div className="col-4 schedule-time-col" key={index} onClick={()=>saveBookingInfo2(val)}>
                            <Link to="#" className="schedule-time-item">
                                <span>{val.time_start} - {val.time_end}</span>
                            </Link>
                        </div>
                    ))
                        :
                    <div className="col-6 schedule-time-col">
                        Hiện tại chưa có lịch khám
                    </div>
                }
                </div> 
            </div>
        </>
        
     );
}

export default ClinicUiTime;