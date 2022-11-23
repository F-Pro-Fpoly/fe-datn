import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getDetailMyBookingServiceAPI } from "../../../../../services/BookingService";

function DetailBooking() {

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
       
            <div className="card border">
        
            <div className="card-header border-bottom">
                <h4 className="card-header-title">Chi tiết lịch khám</h4>
            </div>
            
            <div className="card-body">
    
                <div className="mb-3">
                    <label className="form-label">Mã lịch khám</label>
                    <input className="form-control" name = "code" disabled
                    defaultValue={value.code}
                    type="text" placeholder="Mã lịch khám" />
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
                    <label className="form-label">Trạng thái thanh toán</label>
                    <input className="form-control"name = "code" disabled
                      defaultValue={value.payment_method == "default" ? "Thanh toán tại cơ sở y tế" : "Thanh toán qua momo"}
                    type="text" placeholder="Trạng thái thanh toán" />
                </div>   
                
                <form action="">
                    
                    <div className="mb-3">
                        <label className="form-label">Thông tin khám</label>
                        <textarea name="" className="form-control" style={{resize:"none"}} id="" cols="10" rows="5"></textarea>
                    </div>   
    
                    {/* <div className="mb-3">
                        <label className="form-label">Trạng thái khám</label>
                        <select name="" className="form-control" id="">
                            <option value="">Chọn trạng thái</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>   */}
    
                    <div className="row g-3">
                    <div className="col-md-2">
                    <button className="btn btn-primary" style={{width:"100%"}} type="submit">Xác nhận</button>
                    </div>
                    <div className="col-md-2">
                    <Link className="btn btn-primary" style={{width:"100%"}} to="/ho-so-ca-nhan/danh-sach-lich-kham">Danh sách</Link>
                    </div>
                    </div>
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
     

     );
}

export default DetailBooking;