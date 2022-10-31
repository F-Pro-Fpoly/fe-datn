import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import {Button, Form, Modal, Table} from "react-bootstrap"
import { createSchedule, listSchedule, listScheduleDetail } from "../../../../services/ScheduleService";
import {ToastContainer, toast} from "react-toastify"
import { useSelector } from "react-redux";
import Loading from "../../../../components/Loading/Loading";
import ScheduleTime from "./ScheduleTime";
import { getTimeSlotBySchedule } from "../../../../services/TimeSlotService";
import "./Schedule.scss";

function Schedule() {
    // param
    const param = useParams();
    const [loading, setLoading] = useState(false);
    const [scheduleDetail, setScheduleDetail] = useState([]);
    const [show, setShow] = useState(false);
    let id = param.id
    const token = useSelector(state=>state.auth.token);
    const [addS, setAddS] = useState(false);
    const [listSche, setListSche] = useState([]);
    const [timeSlot, setTimeSlot] = useState({
        'select': "",
        "listTimeSlot": []
    });

    // handle event
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
    const SuSubmit = async (e) => {
        e.preventDefault();
        //  setSchedule({...schedule, "department_id": id})
        let scheduleData = {...schedule, "department_id": id};
        try {
            // console.log(scheduleData);
            // return;
            let res = await createSchedule({token, data: scheduleData});
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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleTimeSlotSelect = async (e) =>{
        let id = e.target.value;
        if(id === ''){
            return;
        }
        // setTimeSlot({...timeSlot, select: id});
        try {
            let res = await getTimeSlotBySchedule({token, id});
            let data = res.data.data;
            setTimeSlot({...timeSlot, listTimeSlot: data, select: id})
        } catch (error) {
            
        }
    }

    // useEffect
    useEffect(()=>{
        console.log(id);
        start();
    },[]);
    
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

            <button className="btn btn-primary ms-2" onClick={handleShow}>Tạo thời gian khám</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tạo thời gian khám</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="p-3 timeSlot">
                        <Form.Group>
                            <Form.Select value={timeSlot.select} onChange={(e) => handleTimeSlotSelect(e)}>
                                <option value="">--Chọn--</option>
                                {listSche.map((item, index)=>{
                                    return (
                                        <option value={item.id} key={index}>{`${item.code} - ${item.date}`}</option>
                                    );
                                })}
                            </Form.Select>
                            
                            
                            <div className="timeSlot-list">
                                {/* <div className="timeSlot-item">
                                    <span>8:00:00</span>
                                    <span>-</span>
                                    <span>8:30:00</span>
                                </div> */}
                                {
                                    timeSlot.listTimeSlot.map((item, index) => {
                                        return (
                                            <div className="timeSlot-item" key={index}>
                                                <span>{item.time_start}</span>
                                                <span>-</span>
                                                <span>{item.time_end}</span>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            
                        </Form.Group>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            {addS && (
               <Form onSubmit={SuSubmit}>
                <Form.Group>
                    <Form.Label>Chọn ngày</Form.Label>
                    <Form.Control type="date" value={schedule.date} onChange={(e)=> setSchedule({...schedule,date:e.target.value})} />
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