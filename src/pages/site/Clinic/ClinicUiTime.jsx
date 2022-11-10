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
        dispatch(setLoading(true));
        try {
            let res = await getScheduleByDate({token, search:{
                date: dateInputValue
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
                'date':date
            };
            sessionStorage['booking_info2'] = JSON.stringify(data);
            console.log("save booking");
            navigate("/dang-ky-lich")
            
        } catch (error) {
            
        }
    }

    return ( 
        <>           
            <div className="image">
                <img src={item.avatar} alt="" />
                <Link to={"/doi-ngu-bac-si/"+item.slug_name+"/"+item.id}>Xem thêm</Link>
            </div>
            <div className="infocontent"> 
                <h3>{item.name}</h3>
                <span>Nguyên Trưởng khoa Cơ xương khớp, Bệnh viện Bạch Mai
                    Chủ tịch Hội Thấp khớp học Việt Nam
                    Giáo sư đầu ngành với gần 50 năm kinh nghiệm điều trị các bệnh lý liên quan đến Cơ xương khớp
                    Bác sĩ khám cho người bệnh từ 14 tuổi trở lên
                </span>          
            </div>

            <div className="schedule">
                <select name="" id="" onChange={(e)=>handleDateInput(e)}>
                    {item.schedule_dates.map((val, index) => (
                        <option value={val.date} key={index}>{val.date_format}</option>
                    ))}                     
                </select>
                
                <div className="title">
                    <i className="fa-solid fa-calendar-days"></i>&nbsp;
                    <span>LỊCH KHÁM</span>
                </div>
                <div className="row schedule-time">
                    {timeSlots.map((val, index) => (
                        <div className="col-4 schedule-time-col" key={index} onClick={()=>saveBookingInfo2(val)}>
                            <a href="#" className="schedule-time-item">
                                <span>{val.time_start} - {val.time_end}</span>
                            </a>
                        </div>
                    ))}                                    
                </div> 
            </div>
        </>
        
     );
}

export default ClinicUiTime;