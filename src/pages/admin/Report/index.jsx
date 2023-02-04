
import Table from "react-bootstrap/esm/Table";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { exportBooking, exportBookingByUser, exportBookingDay, exportTurnover, exportTopView } from "../../../services/Report";
import { useSelector, useDispatch } from "react-redux";
// import useExportFile from "../../../hooks/useExportFile";
import ExportFile from "../../../hooks/useExportFile";
import { toast, ToastContainer } from "react-toastify";
import {setLoading} from "../../../redux/slices/InterfaceSile";
import { Autocomplete, Box, TextField } from "@mui/material";
import { getListUsersV2_1 } from "../../../services/UserService";
function Report() {

    const token = useSelector(state => state.auth.token)
    const [show, setShow] = useState(false);
    const [showByUser, setShowByUser] = useState(false);
    const [valueUser, setValueUser] = useState({
        'id': "",
        'name': "",
        'username': ''
    });
    const [optionUser, setOptionUser] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    
    const [showdetail, setShowdetail] = useState(false);

    const handleCloseDetail = () => setShowdetail(false);
    const handleShowDetail = () => setShowdetail(true);

    const [date,setDate] = useState({
        'from' : '',
        'to' : '', 
    })

    const [code, setCode] = useState('')


    const handleExportExcel = async () => {
        try {
            dispatch(setLoading(true));
            let res = await exportTurnover({token});
            ExportFile(res.data, 'eport_turnover.xlsx');
            dispatch(setLoading(false));
        } catch (error) {
            if(error.response) {
                toast.error(error.response.data.message);
                dispatch(setLoading(false));
                return;
            }
        }
    }

    const handleExportExcelBookings = async () => {
        try {
            dispatch(setLoading(true));
            let res = await exportBookingDay({token, params:{
                from: date.from,
                to:date.to
            }});
            ExportFile(res.data, 'eport_bookings.xlsx');
            handleClose();
            dispatch(setLoading(false));
        } catch (error) {
            if(error.response) {
                toast.error(error.response.data.message);
                dispatch(setLoading(false));
                return;
            }
        }
    }

    const handleExportExcelBooking = async () => {
        if(!code){
            toast.error("vui lòng nhập code");
            // throw "";
        }
        try {
            dispatch(setLoading(true));
            let res = await exportBooking({token, params:{
                code: code.code
            }});
            ExportFile(res.data, 'eport_booking.xlsx');
            handleCloseDetail();
            dispatch(setLoading(false));
        } catch (error) {
            if(error.response) {
                toast.error(error.response.data.message);
                dispatch(setLoading(false));
                return;
            }

            toast.error(error);
            dispatch(setLoading(false));
        }
    }

    const handleExportExcelBookingByUser = async () => {
        if(!valueUser.id){
            toast.error("Vui lòng chọn tên người dùng");
            return;
        }
        try {
            dispatch(setLoading(true));
            let res = await exportBookingByUser({token, id: valueUser.id});
            ExportFile(res.data, 'export_bookings_by_user.xlsx');
            setShowByUser(false);
            dispatch(setLoading(false));
        } catch (error) {
            if(error.response) {
                toast.error(error.response.data.message);
                dispatch(setLoading(false));
                return;
            }
        }
    }
    const handleOnShowUser = async () => {
        try {
            dispatch(setLoading(true));
            let res = await getListUsersV2_1({token});
            let data = res.data.data;
            data = data.map((item, index) => {
                return{
                    id: item.id,
                    name: item.name,
                    username: item.username
                }
            })
            setOptionUser(data);
            setShowByUser(true);
            dispatch(setLoading(false));
        } catch (error) {
            if(error.response) {
                toast.error(error.response.data.message);
                dispatch(setLoading(false));
                return;
            }
        }
    }

    const handleExportTopView  = async () => {
        try {
            dispatch(setLoading(true));
            let res = await exportTopView({token, params:{
                from: date.from,
                to:date.to
            }});
            ExportFile(res.data, 'eport_TopView.xlsx');
            handleClose();
            dispatch(setLoading(false));
        } catch (error) {
            if(error.response) {
                toast.error(error.response.data.message);
                dispatch(setLoading(false));
                return;
            }
        }
    }

    

        return ( 
            <>
            <ToastContainer />
            <Table striped bordered hover responsive >
            <thead>
            <tr>
                <th>BÁO CÁO</th>
                <th>CÔNG CỤ</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td >Báo cáo doanh thu theo chuyên khoa</td>      
                    <td>
                    {/* <a href={`${process.env.REACT_APP_BE}`+'normal/report/turnover'}  rel="noopener noreferrer" className="btn btn-primary" >Xuất báo cáo</a> */}
                    <button className="btn btn-primary" type="button" onClick={handleExportExcel}>Xuất báo cáo</button>
                    </td>
            
                </tr>
                <tr>
                    <td>Báo cáo lịch khám</td>

                    <td>
                    <a className="btn btn-primary"  rel="noopener noreferrer"  onClick={handleShow}>Xuất báo cáo</a>
                    </td>

                    <Modal show={show} onHide={handleClose}>
                            
                            <div className="mod" > 
                                <Modal.Header closeButton>
                                <Modal.Title>BÁO CÁO LỊCH KHÁM</Modal.Title>
                                </Modal.Header>
                                <Form  method = "Post" >
                                <Modal.Body>
            
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Từ ngày</label>
                                        <input type="date" className="form-control" 
                                        name="from"
                                        onChange={(e) => setDate({...date, "from": e.target.value})}
                                    
                                    />
                                    </div>
                                
                                    <div className="col-md-6">
                                        <label className="form-label">Đến ngày</label>
                                        <input type="date"  className="form-control" 
                                        name="to"
                                        onChange={(e) => setDate({...date, "to": e.target.value})}
                                        />
                                    </div>
                                </div>
                                        
                                        
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Đóng
                                </Button>
                        
                                {/* <a onClick={handleClose} href={`${process.env.REACT_APP_BE}`+`normal/report/bookingDay?from=${date.from}&to=${date.to}`}  rel="noopener noreferrer" className="btn btn-primary" >Xuất báo cáo</a> */}

                                <button 
                                    className="btn btn-primary"
                                    onClick={handleExportExcelBookings}
                                    type="button"
                                >Xuất báo cáo</button>
                    
                                </Modal.Footer>
                                </Form>
                            </div>
                    </Modal>
                    
                </tr>
                

                <tr>
                    <td>Báo cáo lịch khám theo người dùng</td>
                    <td>
                        <button 
                            className="btn btn-primary"
                            // rel="noopener noreferrer" 
                            onClick={handleOnShowUser}
                            type="button"
                        >Xuất báo cáo</button>
                    </td>

                    
                    <Modal 
                        show={showByUser} 
                        onHide={() => {setShowByUser(false)}}
                    >
                            
                            <div className="mod" > 
                                <Modal.Header closeButton>
                                <Modal.Title>BÁO CÁO LỊCH KHÁM</Modal.Title>
                                </Modal.Header>
                                <Form  method = "Post" >
                                <Modal.Body>
            
                            
                                    <div className="col-md-12">
                                        <label className="form-label">Nhập tên người dùng cần xuất</label>
                                        {/* <input type="text" className="form-control" 
                                            name="code"
                                            required
                                            onChange={(e) => setCode({ code : e.target.value})}
                                            placeholder="Nhập mã lịch khám"
                                        /> */}

                                        <Autocomplete
                                            value={valueUser}
                                            onChange={(e, value) => {
                                                setValueUser(value)
                                            }}
                                            id="input-user"
                                            sx={{ width: 300 }}
                                            renderInput={(params) => <TextField {...params} label="Tìm kiếm" />}
                                            options={optionUser}
                                            getOptionLabel={(option) => option.username}
                                            renderOption={(props, option) => (
                                                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                                    {option.name} - {option.username}
                                                </Box>
                                            )}
                                        />
                                    </div>
                                
                        
                                        
                                        
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={() => {setShowByUser(false)}}>
                                    Đóng
                                </Button>
                        
                                {/* <a  
                            
                                onClick={handleCloseDetail} href={`${process.env.REACT_APP_BE}`+`normal/report/bookingCode?code=${code.code}`}  rel="noopener noreferrer" className="btn btn-primary" >Xuất báo cáo</a> */}
                    
                                <button
                                    className="btn btn-primary"
                                    onClick={handleExportExcelBookingByUser}
                                    type="button"
                                >Xuất báo cáo</button>
                                </Modal.Footer>
                                </Form>
                            </div>
                    </Modal>
                </tr>

                <tr>
                    <td>Top bài viết được xem nhiều</td>

                    <td>
                    <a className="btn btn-primary"  rel="noopener noreferrer"  onClick={handleShow}>Xuất báo cáo</a>
                    </td>

                    <Modal show={show} onHide={handleClose}>
                            
                            <div className="mod" > 
                                <Modal.Header closeButton>
                                <Modal.Title>Top bài viết</Modal.Title>
                                </Modal.Header>
                                <Form  method = "Post" >
                                <Modal.Body>
            
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Từ ngày</label>
                                        <input type="date" className="form-control" 
                                        name="from"
                                        onChange={(e) => setDate({...date, "from": e.target.value})}
                                    
                                    />
                                    </div>
                                
                                    <div className="col-md-6">
                                        <label className="form-label">Đến ngày</label>
                                        <input type="date"  className="form-control" 
                                        name="to"
                                        onChange={(e) => setDate({...date, "to": e.target.value})}
                                        />
                                    </div>
                                </div>
                                        
                                        
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Đóng
                                </Button>
                        
                                {/* <a onClick={handleClose} href={`${process.env.REACT_APP_BE}`+`normal/report/bookingDay?from=${date.from}&to=${date.to}`}  rel="noopener noreferrer" className="btn btn-primary" >Xuất báo cáo</a> */}

                                <button 
                                    className="btn btn-primary"
                                    onClick={handleExportTopView}
                                    type="button"
                                >Xuất báo cáo</button>
                    
                                </Modal.Footer>
                                </Form>
                            </div>
                    </Modal>
                    
                </tr>
            </tbody>
            
            </Table>
            </>
        //   {
        //     loading && <Loading />
        //   }
        );
}





export default Report;