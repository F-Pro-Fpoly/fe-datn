
import { useEffect, useState } from "react";
import { Button, Form, FormFloating, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { createSchedule, listScheduleApi, listTimeslot } from "../../../../services/ScheduleService";
import {setLoading} from "../../../../redux/slices/InterfaceSile"
import moment from 'moment/moment.js';
import "../Calendar.scss";
import { useRef } from "react";
import Select from 'react-select';
import { getListUsersV2_1 } from "../../../../services/UserService";
import { Checkbox, FormControlLabel } from "@mui/material";

function CreateDalandar() {
    const token = useSelector(state=>state.auth.token);
    const user = useSelector(state => state.auth.user);
    const [selectAdd, setSelectAdd] = useState(1);
    const formRef = useRef();
    const dispatch = useDispatch();
    const [date, setDate] = useState("");
    const [dateTo, setDateTo] = useState('');
    const [show, setShow] = useState(false);
    const [listSchedule, setListSchedule] = useState([]);
    const [listTsByDate, setListTsByDate] = useState([]);
    const [listUserDoctor, setListUserDoctor] = useState([]);
    const [userDoctorValue, setUserDoctorValue] = useState({
        'label': '--Chọn bác sĩ--',
        'value': 0
    });
    const [intervals, setIntervals] = useState('M');
    const [checkBoxState, setCheckBoxState] = useState(false);

    // method
    const start = async () => {
        // if(date) {
        //     dispatch(setLoading(true));
        //     let res = await listScheduleApi({token, search:{
        //         "create_by": user.id,
        //         "date": moment(new Date(date)).format('YYYY-MM-DD')
        //     }});
        //     let data = res.data.data;
        //     setListSchedule(data);
        //     dispatch(setLoading(false));
        // }
        try {
            dispatch(setLoading(true));
            let res = await getListUsersV2_1({token, search: {
                'role_code': 'doctor'
            }});
            let data = res.data.data;
            let dataHadle = data.map((item) => {
                return {
                    'label': item.name,
                    'value': item.id
                }
            });
            setListUserDoctor(dataHadle);
            dispatch(setLoading(false));
        } catch (error) {
            
        }
    }
    const handleSelect = (data) => {
        setUserDoctorValue(data);
    }
    const handleShow = async () => {
        if(!date){
            toast.error("Vui lòng chọn ngày")
            return;
        }
        dispatch(setLoading(true))
        if(selectAdd == 2){
            if(!dateTo) {
                toast.error("Vui lòng chọn kết thúc")
                return;
            }
            let formData = new FormData(formRef.current);
            // console.log(formData.getAll('timeslot'));
            let dateFormat = moment(new Date(date)).format('YYYY-MM-DD');
            let dateEnd = moment(new Date(dateTo)).format('YYYY-MM-DD');
            // console.log(dateFormat);
            // return 
            formData.append("date", dateFormat);
            formData.append('doctor_id', userDoctorValue.value);
            formData.append('make_dates', 1);
            formData.append('end_date', dateEnd);
            try {
                let res = await createSchedule({token, data:formData});
                let message = res.data.message;
                toast.success(message);
                // start()
                handleSearchBtn();
                setShow(false)
                dispatch(setLoading(false));
            } catch (error) {
                dispatch(setLoading(false));
                let res = error.res;
                let message = res.data.message;
                toast.error(message);
            }
        }else{
            try {
                let res = await listTimeslot({token, search:{
                    "date" : date,
                    'doctor_id': userDoctorValue.value,
                    'interval': intervals
                }})
                let data = res.data.data;
                setListTsByDate(data);
                setShow(true)   
                dispatch(setLoading(false))
            } catch (error) {
                
            }
        }

    }
    const handleClose = () => {
        setShow(false)
        setCheckBoxState(false);
    }
    const handleSubmitModal = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true));
        let formData = new FormData(formRef.current);
        // console.log(formData.getAll('timeslot'));
        let dateFormat = moment(new Date(date)).format('YYYY-MM-DD');
        // console.log(dateFormat);
        // return 
        formData.append("date", dateFormat);
        formData.append('doctor_id', userDoctorValue.value);
        try {
            let res = await createSchedule({token, data:formData});
            let message = res.data.message;
            toast.success(message);
            // start()
            handleSearchBtn();
            setShow(false)
            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setLoading(false));
            let res = error.res;
            let message = res.data.message;
            toast.error(message);
        }
    }
    const handleSearchBtn = async () => {
        try {
            setListSchedule([]);
            if (userDoctorValue.value == 0) throw "Bạn chưa chọn tên bác sĩ";
            if(date) {
                dispatch(setLoading(true));
                let res = await listScheduleApi({token, search:{
                    "created_by": userDoctorValue.value,
                    "date": moment(new Date(date)).format('YYYY-MM-DD')
                }});
                let data = res.data.data;
                setListSchedule(data);
                dispatch(setLoading(false));
            }
        } catch (error) {
            if(error.response) {
                toast.error(error.response.data.message);
                return
            }
            toast.error(error);
        }
    }

    const handleOnChangeIntervalInput = async (e) => {
        dispatch(setLoading(true))
        let interval = e.target.value;
        setIntervals(e.target.value);
        try {
            let res = await listTimeslot({token, search:{
                "date" : date,
                'doctor_id': userDoctorValue.value,
                'interval': interval
            }})
            let data = res.data.data;
            setListTsByDate(data);
            dispatch(setLoading(false))
        } catch (error) {
            if(error.response){
                let message = error.response.data.message;
                toast.error(message)
            }
        }
    }

    useEffect(() => {
        start()
    },[])

    useEffect(() => {

    }, [selectAdd])

    return ( 
        <div className="danlandar">
            <ToastContainer />
            <div className="adminItem">
                <h2>Tạo lịch khám cho bác sĩ</h2>
               
                    <div className="form-group mb-2">
                        <Select
                            options={listUserDoctor}
                            value={userDoctorValue}
                            onChange={handleSelect}
                        />
                    </div>

                    <div className="form-group mb-2">
                        <select 
                            name=""
                            id=""
                            className="form-control"
                            value={selectAdd}
                            onChange={(e) => {
                                setSelectAdd(e.target.value)
                            }}
                        >
                            <option value="1">Tạo 1 ngày</option>
                            <option value="2">Tạo nhiều ngày</option>
                        </select>
                    </div>

                    <div className="row g-3">
                    <div className="col-12">             
                        <div className="danlandar-header-date col-md-6">
                            <label htmlFor="" className="form-label">{selectAdd == 1 ? 'Chọn': 'Từ'} ngày:  </label>
                            <input type="date" 
                            className="form-control"
                            value={date} onChange={(e) => setDate(e.target.value)}/>
                        </div>
                        {
                            selectAdd == 2 && (
                                <div className="danlandar-header-date col-md-6">
                                    <label htmlFor="" className="form-label">Tới ngày:  </label>
                                    <input type="date"
                                    className="form-control"
                                    value={dateTo} onChange={(e) => setDateTo(e.target.value)}/>
                                </div>
                            )
                        }
                  
                        </div>
                   

                       
                </div>
                <div className="danlandar-header mt-3">
                    
                    <button className="btn btn-primary me-2" type="button" onClick={handleShow}>Tạo</button>
                    <button className="btn btn-secondary" onClick={handleSearchBtn}>Xác nhận</button>
                </div>
                <div className="danlandar-body">
                    {(date || listSchedule.length > 0) ? listSchedule.map((item, index) => (
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
                        <div className="row my-2">
                            <div className="col-4">
                                <Form.Select 
                                    value={intervals}
                                    onChange={handleOnChangeIntervalInput}
                                >
                                    <option value="M">Sáng</option>
                                    <option value="A">Chiều</option>
                                </Form.Select>
                            </div>

                            <div className="col-4">
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={checkBoxState}
                                        onChange={(e)=>{
                                            let checkbox = e.target.checked;
                                            setCheckBoxState(e.target.checked)
                                            let checkboxs = document.getElementsByName('timeslot_id[]');
                                            checkboxs.forEach((item) => {
                                                item.checked = checkbox
                                            })
                                        }}
                                    />}
                                    label="Chọn tất cả"
                                />
                            </div>
                        </div>
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
        )
}

export default CreateDalandar;