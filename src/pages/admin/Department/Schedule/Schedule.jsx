import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import {Button, Form, Table} from "react-bootstrap"
import { createSchedule, listSchedule, listScheduleDetail } from "../../../../services/ScheduleService";
import {ToastContainer, toast} from "react-toastify"
import { useSelector } from "react-redux";
import Loading from "../../../../components/Loading/Loading";
import ScheduleTime from "./ScheduleTime";

function Schedule() {
    const param = useParams();
    const [loading, setLoading] = useState(false);
    const [scheduleDetail, setScheduleDetail] = useState([]);
    let id = param.id
    const token = useSelector(state=>state.auth.token);
    const [addS, setAddS] = useState(false);
    const [listSche, setListSche] = useState([]);
    const [schedule, setSchedule] = useState({
        "date": "",
        "description": ""
    });

    const handleScheduleDetail = async (id) => {
        try {
            let res = await listScheduleDetail({token,search: {
                "schedule_id" :id
            }});
            let data = res.data.data;
            setScheduleDetail(data);
        } catch (error) {
            
        }
    }

    const start = async () => {
        try {
            setLoading(true);
            let res = await listSchedule({token, search : {
                "page": 1,
                'department_id':id
            }});
            setListSche(res.data.data);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        console.log(id);
        start();
    },[]);
    const SuSubmit = async (e) => {
        e.preventDefault();
        try {
            setSchedule({...schedule, "department_id": id})
            // console.log(schedule);
            // return;
            let res = await createSchedule({token, data: schedule});
            let message = res.data.message;
            toast.success(message);
            setSchedule({
                "date": "",
                "description": ""
            })
            start();
        } catch (error) {
            let message = error.response.data.message;
            toast.error(message);
        }
    }
    return ( 
        <div className="adminItem">
            <h4>Lịch khám của phòng</h4>
            <ToastContainer />
            <button className="btn btn-primary" onClick={() => {
                if(addS) {
                    setAddS(false)
                }else{
                    setAddS(true)
                }
            }}>{addS ? "Close" : "Tạo lịch khám"}</button>
            {addS && (
               <Form onSubmit={SuSubmit}>
                <Form.Group>
                    <Form.Label>Chọn ngày</Form.Label>
                    <Form.Control type="date" value={schedule.date} onChange={(e)=>setSchedule({...schedule,date:e.target.value})} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Nhập mô tả"
                        style={{ height: '100px' }}
                        value={schedule.description}
                        onChange={(e)=>setSchedule({...schedule,description:e.target.value})}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-2">Tạo</Button>
               </Form> 
            )}

            <div className="listSchedule">
                <h5>Danh sách lịch khám</h5>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Code</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listSche.map((item, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td >
                                    <span className="table-link" onClick={()=>handleScheduleDetail(item.id)}>{item.code}</span>
                                </td>
                                <td>{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                {loading && <Loading />}
                {scheduleDetail.length > 0 && <ScheduleTime listDetail={scheduleDetail}/>}
            </div>
        </div>
     );
}

export default Schedule;