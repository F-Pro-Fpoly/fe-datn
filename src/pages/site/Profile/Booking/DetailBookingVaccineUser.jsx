import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { toast,ToastContainer } from 'react-toastify';
import { getDetailMyBookingServiceAPI } from "../../../../services/BookingService";
import DetailInfo from "../Doctor/DetailBooking/DetailInfo";
function DetailBookingVaccineUser() {

    const token = useSelector(state => state.auth.token)
    const param  = useParams();
    const id = param.id;
    const [value, setValue] = useState([]);
    
    const start = async () => {
        let res = await getDetailMyBookingServiceAPI(token,id);
        let data = res.data;
        let dataArr = data.data;
        setValue(dataArr);
    }

    useEffect(() => { 
        document.title = "Trang chi tiết lịch khám"
        start()
    }, [])



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
                <h4 className="card-header-title">Chi tiết lịch tiêm </h4>
            </div>
            
            <div className="card-body">
    
                <div className="mb-3">
                    <label className="form-label">Mã lịch khám</label>
                    <input className="form-control" name = "code" disabled
                    defaultValue={value.code}
                    type="text" placeholder="Mã lịch khám" />
                </div>   

                <div className="mb-3">
                    <label className="form-label">Tên vaccine</label>
                    <input className="form-control" name = "code" disabled
                    defaultValue={value.vaccine_name}
                    type="text" placeholder="Tên vaccine" />
                </div>   
                
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
            
               
                <div className="mb-3">
                    <label className="form-label">Trạng thái lịch khám</label>
                    <input className="form-control"name = "code" disabled
                      defaultValue={value.status_name } />
                </div>   
                
            
                    <div className="mb-3">
                        <label className="form-label">Thông tin từ bệnh nhân</label>
                        <textarea name="" className="form-control" style={{resize:"none"}} id="" cols="5" rows="2"
                        defaultValue={value.description} disabled>
                        </textarea>
                    </div>   
                 
                    <DetailInfo 
                        data={value.injection_info}
                        onChange={(is_update) => {
                            if(is_update){
                                start();
                            }
                        }}
                    />


                    <div className="row g-3">
                        <div className="col-md-2">
                        <Link className="btn btn-primary" style={{width:"100%"}} to="/ho-so-ca-nhan/lich-kham">Trở về </Link>
                        </div>
                    </div>

       
            </div>

        
            </div>
     
      </>

     );
}

export default DetailBookingVaccineUser;