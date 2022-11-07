
import { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { createSchedule, listScheduleApi, listTimeslot } from "../../../../services/ScheduleService";
import {setLoading} from "../../../../redux/slices/InterfaceSile"
import moment from 'moment/moment.js'
import "../Calendar.scss";
import { useRef } from "react";
function CreateDalandar() {
    const token = useSelector(state=>state.auth.token);
    const user = useSelector(state => state.auth.user);
    const formRef = useRef();
    const dispatch = useDispatch();
    const [date, setDate] = useState("");
    const [show, setShow] = useState(false);
    const [listSchedule, setListSchedule] = useState([]);
    const [listTsByDate, setListTsByDate] = useState([]);

    // method
    const start = async () => {
        if(date) {
            dispatch(setLoading(true));
            let res = await listScheduleApi({token, search:{
                "create_by": user.id,
                "date": moment(new Date(date)).format('YYYY-MM-DD')
            }});
            let data = res.data.data;
            setListSchedule(data);
            dispatch(setLoading(false));
        }
    }
    const handleShow = async () => {
        if(!date){
            toast.error("Vui lòng chọn ngày")
            return;
        }
        dispatch(setLoading(true))
        try {
            let res = await listTimeslot({token, search:{
                "date" : date
            }})
            let data = res.data.data;
            setListTsByDate(data);

            setShow(true)   
            dispatch(setLoading(false))
        } catch (error) {
            
        }

    }
    const handleClose = () => setShow(false)
    const handleSubmitModal = async (e) => {
        e.preventDefault();
        let formData = new FormData(formRef.current);
        // console.log(formData.getAll('timeslot'));
        let dateFormat = moment(new Date(date)).format('YYYY-MM-DD');
        console.log(dateFormat);
        // return 
        formData.append("date", dateFormat);
        try {
            let res = await createSchedule({token, data:formData});
            let message = res.data.message;
            toast.success(message);
            start()
            setShow(false)
        } catch (error) {
            let res = error.res;
            let message = res.data.message;
            toast.error(message);
        }
    }

    useEffect(() => {
        start()
    },[date])

    return ( 

        user.specailist_id ? (
        <div className="danlandar">
            <ToastContainer />
            <div className="adminItem">
                <h5>Tạo lịch khám cho <span className="text-danger">{user.name}</span></h5>
                <div className="danlandar-header">
                    <div className="danlandar-header-date">
                        <label htmlFor="" className="form-label">Chọn ngày:  </label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                    </div>
                    <button className="btn btn-primary" onClick={handleShow}>Tạo</button>
                </div>
                <div className="danlandar-body">
                    {(date && listSchedule.length > 0) ? listSchedule.map((item, index) => (
                        <div className="danlandar-item"  key={index}>
                            <span>{item.time_start}</span>
                            <span>-</span>
                            <span>{item.time_end}</span>
                        </div>
                    )):(
                        <h4>Không có lịch khám cho ngày {date}</h4>
                    )}
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Form ref={formRef} onSubmit={handleSubmitModal}>  
                    <Modal.Header closeButton>
                    <Modal.Title>Chọn khoảng thời gian</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="danlandar-modal">
                            
                                {
                                    listTsByDate.map((item, index) =>(
                                        <div className="danlandar-modal-item" key={index}>
                                            <input type="checkbox" value={item.id} name="timeslot_id[]" id={`idcheckbox${index}`}  className="danlandar-modal-box"/>
                                            <label htmlFor={`idcheckbox${index}`} className="danlandar-modal-label">
                                                <span>{item.time_start}</span>
                                                <span>-</span>
                                                <span>{item.time_end}</span>
                                            </label>
                                        </div>
                                    ))
                                }
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" type="button" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleSubmitModal}>
                        Lưu
                    </Button>
                    </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        </div>
        ):(
            <h3>Vui lòng cập nhập profile đầy đủ</h3>
        )
        
     );
}

export default CreateDalandar;