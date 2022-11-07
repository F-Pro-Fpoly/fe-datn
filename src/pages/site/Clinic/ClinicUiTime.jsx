import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getScheduleByDate } from "../../../services/ScheduleService";
import {setLoading} from "../../../redux/slices/InterfaceSile";

function ClinicUiTime({dataItem}) {
    const [item, setItem] = useState(dataItem);
    const [timeSlots, setTimeSlot] = useState(dataItem.schedule_data ?? []);
    const [date, setDate] = useState();
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    // const loading = useSelector(state => state.interface.loading)

    const handleDateInput = async (e) => {
        let dateInputValue = e.target.value;
        // console.log(dateInputValue);
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

    return ( 
        <>           
            <div className="image">
                <img src={item.avatar} alt="" />
                <Link to="">Xem thêm</Link>
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
                        <div className="col-4 schedule-time-col" key={index}>
                            {/* <ClinicUiTime schedule={val}  /> */}
                            <input type="radio" className="schedule-time-input" id={`scheduleTime${val.id}`} name='schedule_time' />
                            <label htmlFor={`scheduleTime${val.id}`} name="schedule_time" className="schedule-time-item">
                                {val.time_start} - {val.time_end}
                            </label>
                        </div>
                    ))}                                    
                </div> 
            </div>
        </>
        
     );
}

export default ClinicUiTime;