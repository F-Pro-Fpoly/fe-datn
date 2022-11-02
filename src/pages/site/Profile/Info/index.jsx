import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from 'react';


function Info() {
    const infoUserr = useSelector(state => state.auth.user )

    const [infoUser, setInfoUser] = useState({
        ...infoUserr
    })
    return(

        <div className="vstack gap-4">
                        
        <div className="bg-light rounded p-3">
            
            <div className="overflow-hidden">
                <h6>Hoàn thành trang cá nhân của bạn</h6>
                <div className="progress progress-sm bg-success bg-opacity-10">
                    <div className="progress-bar bg-success aos aos-init aos-animate" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style={{width:"85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                    <span className="progress-percent-simple h6 fw-light ms-auto">85%</span>
                </div>
            </div>
            <p className="mb-0">Hoàn thành hồ sơ để đặt lịch khám nhanh chóng!</p>
            </div>
            
            <div className="bg-body rounded p-3 mt-3">
                <ul className="list-inline hstack flex-wrap gap-2 justify-content-between mb-0">
                    <li className="list-inline-item h6 fw-normal mb-0"htmlFor="xt">
                        <Link to="#" >
                            <i className="bi bi-check-circle-fill  text-success me-2"></i>
                            Xác thực email
                        </Link>
                    </li>                                
                    <li className="list-inline-item h6 fw-normal mb-0">
                        <Link to="#" className="text-primary">
                            <i className="bi bi-plus-circle-fill me-2"></i>Hoàn thành thông tin cơ bản
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

        
        <div className="card border">
            
            <div className="card-header border-bottom">
                <h4 className="card-header-title">Thông tin cá nhân</h4>
            </div>

            
            <div className="card-body">
                
                <form className="row g-3">
                    
                    <div className="col-12">
                        <label className="form-label">Thêm ảnh đại diện<span className="text-danger">*</span></label>
                        <div className="d-flex align-items-center">
                            <label className="position-relative me-4" htmlFor="uploadfile-1" title="Replace this pic">
                                
                                <span className="avatar avatar-xl">
                                    <img id="uploadfile-1-preview" className="avatar-img rounded-circle border border-white border-3 shadow" src={infoUser.avatar}  alt="Avatar" />
                                </span>
                            </label>
                            
                            <label className="btn btn-sm btn-primary-soft mb-0" htmlFor="uploadfile-1">Thay đổi</label>
                            <input id="uploadfile-1" className="form-control d-none" type="file" />
                        </div>
                    </div>

                    
                    <div className="col-md-6">
                        <label className="form-label">Họ và tên<span className="text-danger">*</span></label>
                        <input type="text" className="form-control" defaultValue={infoUser.name} placeholder="Nhập họ và tên" />
                    </div>

                    
                    <div className="col-md-6">
                        <label className="form-label">Email<span className="text-danger">*</span></label>
                        <input type="email" className="form-control" defaultValue={infoUser.email} placeholder="Nhập địa chỉ email" />
                    </div>

                    
                    <div className="col-md-6">
                        <label className="form-label">Số điện thoại<span className="text-danger">*</span></label>
                        <input type="text" className="form-control" defaultValue={infoUser.phone}  placeholder="Enter your mobile number" />
                    </div>

               

                    
                    <div className="col-md-6">
                        <label className="form-label">Ngày sinh<span className="text-danger">*</span></label>
                        <input type="date" className="form-control flatpickr flatpickr-input" defaultValue={infoUser.date}   placeholder="Nhập ngày sinh" data-date-format="Y-m-d" readOnly="readonly" />
                    </div>

                    
                    <div className="col-md-6">
                        <label className="form-label">Giới tính<span className="text-danger">*</span></label>
                        <div className="d-flex gap-4">

                            <div className="form-check radio-bg-light">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked={infoUser.gender == 0 ? true : false} />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                   Nam
                                </label>
                            </div>
                            <div className="form-check radio-bg-light">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked={infoUser.gender == 1 ? true : false} />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Nữ
                                </label>
                            </div>
                            <div className="form-check radio-bg-light">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked={infoUser.gender == 3 ? true : false} />
                                <label className="form-check-label" htmlFor="flexRadioDefault3">
                                    Khác
                                </label>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-12">
                        <label className="form-label">Địa chỉ</label>
                        <textarea className="form-control" rows="3" spellCheck="false" defaultValue={infoUser.address}></textarea>
                    </div>
              
                    <div className="col-12 text-end">
                        <Link to="#" className="btn btn-primary mb-0">Lưu thay đổi</Link>
                    </div>
                </form>
                
            </div>
            
        </div>
        
        
        <div className="card border">
            
            <div className="card-header border-bottom">
                <h4 className="card-header-title">Xác thực email</h4>
               
            </div>

            
            <div className="card-body">
                <form>
                    
                    <label className="form-label">Địa chỉ email của bạn<span className="text-danger">*</span></label>
                    <input type="email" id='xt' className="form-control" placeholder="Nhập địa chỉ email" />

                    <div className="text-end mt-3">
                        <Link to="#" className="btn btn-primary mb-0">Xác nhận</Link>
                    </div>
                </form>	
            </div>
            
        </div>
        

        
        <div className="card border">
            
            <div className="card-header border-bottom">
                <h4 className="card-header-title">Thay đổi mật khẩu</h4>
            </div>
            
            <form className="card-body">
                
                <div className="mb-3">
                    <label className="form-label">Mật khẩu hiện tại</label>
                    <input className="form-control" type="password" placeholder="Nhập mật khẩu hiện tại" />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Mật khẩu mới</label>
                    <div className="input-group">
                        <input className="form-control fakepassword" placeholder="Nhập mật khẩu mới" type="password" id="psw-input" />
                        <span className="input-group-text p-0 bg-transparent">
                            <i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
                        </span>
                    </div>
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Nhập lại mật khẩu</label>
                    <input className="form-control" type="password" placeholder="Nhập lại mật khẩu" />
                </div>

                <div className="text-end">
                    <Link to="#" className="btn btn-primary mb-0">Xác nhận</Link>
                </div>
            </form>
            
   
        
    </div>
    </div>  
    )
}
export default Info