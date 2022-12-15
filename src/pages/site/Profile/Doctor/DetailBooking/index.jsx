import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getDetailMyBookingServiceAPI, getListStatuServiceAPI, updateBookingDoctorServiceAPI } from "../../../../../services/BookingService";
import { toast,ToastContainer } from 'react-toastify';
import {Button} from '@mui/material';
import DetailInfo from "./DetailInfo";
import {setLoading} from '../../../../../redux/slices/InterfaceSile'

function DetailBooking() {
    const [isVaccine, setIsVaccine] = useState(false);
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch();
    const param  = useParams();
    const id = param.id;
    const formRef = useRef();
    const checkRole = useSelector(state => state.auth.user.role_id)

    const [value, setValue] = useState([]);
    const [status, setStatus] = useState([])
    const [changeState, setchangeState] = useState("");
    const [inputDisable, setInputDisable] = useState();


    const start = async () => {
        dispatch(setLoading(true));
        let res = await getDetailMyBookingServiceAPI(token,id);
        let status = await getListStatuServiceAPI(token,1)
        let dataStatus = status.data
        let dataArrStatus = dataStatus.data
        setStatus(dataArrStatus)
        let data = res.data;
        let dataArr = data.data;
        setValue(dataArr);
        setInputDisable(dataArr.status_id);

        if(dataArr.injection_info) {
            setIsVaccine(true);
        }
        dispatch(setLoading(false));
    }

    useEffect(() => { 
        document.title = "Trang chi tiết lịch khám"
        start()
    }, [])


    const HandleSubmit = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true));
        const formData = new FormData(formRef.current)

        const req = {
            "token" : token,
            "data": formData,  
            "id" : id,
        }

        try {
            let res =  await updateBookingDoctorServiceAPI(req);
            let message = res.data.message;
            toast.success(message);
            dispatch(setLoading(false));
        } catch (error) {
            console.log(error);
            let res = error.response;
            let status = res.status;
            let data = res.data;
            let message = data.message;
            toast.error(message);
            dispatch(setLoading(false));
        }

    }

    return ( 
       
      <>
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />

            <div className="card border">
        
            <div className="card-header border-bottom">
                {value.is_vaccine == 0 ?
                    <h4 className="card-header-title">Chi tiết lịch khám</h4>
                    :
                    <h4 className="card-header-title">Chi tiết lịch tiêm</h4>
                }
               
            </div>
            
            <div className="card-body">
    
                <div className="mb-3">
                    <label className="form-label">Mã lịch khám</label>
                    <input className="form-control" name = "code" disabled
                    defaultValue={value.code}
                    type="text" placeholder="Mã lịch khám" />
                </div>   
                {value.is_vaccine == 1 ? 
                <div className="mb-3">
                    <label className="form-label">Tên vaccine</label>
                    <input className="form-control" name = "name_vaccine" disabled
                    defaultValue={value.vaccine_name}
                    type="text" placeholder="Tên vaccine" />
                </div> 
                :
              
                <div className="mb-3">
                    <label className="form-label">Tên chuyên khoa</label>
                    <input className="form-control" name = "specialist_name" disabled
                    defaultValue={value.specialist_name}
                    type="text" placeholder="Tên chuyên khoa" />
                </div> 
              }



                <div className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Họ và tên</label>
                        <input type="text" className="form-control" 
                        name="name"
                        disabled
                        defaultValue={value.customer_name}
                        placeholder="Nhập họ và tên" />
                    </div>
                
                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" disabled className="form-control" 
                        name="email"
                        defaultValue={value.email}
                        placeholder="Nhập địa chỉ email" />
                    </div>
    
                    <div className="col-md-6">
                        <label className="form-label">Ngày sinh</label>
                        <input type="email" disabled className="form-control" 
                        name="text"
                        defaultValue={value.birthday}
                        placeholder="Nhập địa chỉ email" />
                    </div>
    
                    <div className="col-md-6">
                        <label className="form-label">Số điện thoại</label>
                        <input type="email" disabled className="form-control" 
                        name="text"
                        defaultValue={value.phone}
                        placeholder="Nhập địa chỉ email" />
                    </div>
                </div>
         
                {
                    !isVaccine && (
                        <div className="mb-3">
                            <label className="form-label">Trạng thái thanh toán</label>
                            <input className="form-control"name = "code" disabled
                            defaultValue={value.payment_method = "default" ? "Thanh toán tại cơ sở y tế" : "Thanh toán qua momo"}
                            type="text" placeholder="Trạng thái thanh toán" />
                        </div>  
                    )
                } 
                
            
                <div className="mb-3">
                    <label className="form-label">Thông tin từ bệnh nhân</label>
                    <textarea name="" className="form-control" style={{resize:"none"}} id="" cols="5" rows="2"
                    defaultValue={value.description} disabled>
                    </textarea>
                </div>   
                <form onSubmit={HandleSubmit} ref = {formRef}>        
                    <div className="form-group mb-3">
                      
                        <select name="statusBooking" className="form-control" id=""
                            value={ value.status_id ? value.status_id : 0} 
                            onChange ={(e) => setValue( {...value, status_id: e.target.value})}
                            disabled={inputDisable == 4 ? true: false}
                        >
                            <option value="0" disabled>Chọn trạng thái</option>
                            {
                                status.map((item,index) => {
                                    return (
                                        <option  key={index} value={item.id}>{item.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                            
                    {
                         value.status_id == 5 ? 
                            <div className="mb-3">
                                <label className="form-label">Lý do hủy</label>
                                <textarea name="reasonCancel" className="form-control" style={{resize:"none"}}
                                defaultValue={value.reasonCancel ? value.reasonCancel : ""}
                                id="" cols="5" rows="2"
                                disabled= {checkRole != 2 ? true : false}
                                ></textarea>
                            </div>   
                         :
                        <>
                            <div className="mb-3">
                                <label className="form-label">Thông tin sau khám</label>
                                <textarea name="info" className="form-control" style={{resize:"none"}}
                                defaultValue={value.infoAfterExamination ? value.infoAfterExamination : ""}
                                id="" cols="5" rows="2"
                                disabled= {checkRole != 2 ? true : false}
                                ></textarea>
                            </div>   

                              {
                                checkRole != 2 ? "" :

                                 value.is_vaccine  == 1 ? "" :

                                 <div className="mb-3">
                                    <label className="form-label">File đính kèm</label>
                                    <input className="form-control" name = "file" 
                                    type="file" placeholder="Thông tin khám" />

                                    {
                                        value.file_name ? 
                                    
                                        <div className="mb-3">                                 
                                            <a href={`${process.env.REACT_APP_BE}${ value.file_name}` }
                                            className="btn btn-primary">Tải file</a> 
                                        </div>
                                        : ""
                                    }                 
                                </div>  

                              }  

                            
                        </>
                        
                    }


                    {isVaccine &&
                    <DetailInfo 
                        data={value.injection_info}
                        booking_id={value.id}
                        onChange={(is_update) => {
                            if(is_update){
                                start();
                            }
                        }}
                    />}

                 

                 {
                    checkRole != 2  ? 

                    <div className="row g-3">

                    <div className="col-md-2">
                        <Link className="btn btn-primary" style={{width:"100%"}} to="/ho-so-ca-nhan/lich-kham">Trở về</Link>
                    </div>
                    </div>
                :
                <div className="row g-3">
                    <div className="col-md-2">
                        <button className="btn btn-primary" style={{width:"100%"}} type="submit">Xác nhận</button>
                    </div>
                    <div className="col-md-2">
                        <Link className="btn btn-primary" style={{width:"100%"}} to="/ho-so-ca-nhan/danh-sach-lich-kham">Danh sách</Link>
                    </div>
                </div>
                 }
                      
                    
                </form> 
    
            </div>
    
         
    
            {/* <form className="card-body"  method="Post" >
                
                <div className="mb-3">
                    <label className="form-label">Mật khẩu hiện tại</label>
                    <input className="form-control"
                    name = "old_pass"
                    type="password" placeholder="Nhập mật khẩu hiện tại" />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Mật khẩu mới</label>
                    <div className="input-group">
                        <input className="form-control fakepassword"
                        name='new_pass'
                        placeholder="Nhập mật khẩu mới" type="password" id="psw-input" />
                        <span className="input-group-text p-0 bg-transparent">
                            <i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
                        </span>
                    </div>
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Nhập lại mật khẩu</label>
                    <input className="form-control" type="password"
                    name='comfirm_pass'
                    placeholder="Nhập lại mật khẩu" />
                </div>
    
                <div className="text-end">
                 <button className='btn btn-primary mb-0' type='submit'>Xác nhận</button>
                </div>
            </form> */}
            
    
        
            </div>
     
      </>

     );
}

export default DetailBooking;