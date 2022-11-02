import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from 'react';


function Menu() {

    const infoUserr = useSelector(state => state.auth.user )

    const [infoUser, setInfoUser] = useState({
        ...infoUserr
    })

    return(
        <div className="col-lg-4 col-xl-3">          
        <div className="offcanvas-lg offcanvas-end" tabIndex="-1" id="offcanvasSidebar">                
            <div className="offcanvas-header justify-content-end pb-2">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close"></button>
            </div>                     
            <div className="offcanvas-body p-3 p-lg-0">
                <div className="card bg-light w-100">                   
                    <div className="position-absolute top-0 end-0 p-3">
                        <Link to="#" className="text-primary-hover" data-bs-toggle="tooltip" data-bs-title="Edit profile">
                            <i className="bi bi-pencil-square"></i>
                        </Link>
                    </div>
                    
                    <div className="card-body p-3">                              
                        <div className="text-center mb-3">                                    
                            <div className="avatar avatar-xl mb-2">
                                <img className="avatar-img rounded-circle border border-2 border-white" src={infoUser.avatar} alt="Avatar" />
                            </div>
                            <h6 className="mb-0">{infoUser.name}</h6>
                            <Link to="#" className="text-reset text-primary-hover small">{infoUser.email}</Link>
                            <hr />
                        </div>
                        
                        <ul className="nav nav-pills-primary-soft flex-column">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/ho-so-ca-nhan/"><i className="bi bi-person fa-fw me-2"></i>Thông tin cá nhân</Link>
                            </li>
    
                            <li className="nav-item">
                                <Link className="nav-link" to="/ho-so-ca-nhan/lich-kham"><i className="bi bi-people fa-fw me-2"></i>Quản lí lịch khám</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="account-payment-details.html"><i className="bi bi-wallet fa-fw me-2"></i>Payment Details</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="account-settings.html"><i className="bi bi-gear fa-fw me-2"></i>Chỉnh sửa</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-danger bg-danger-soft-hover" to="/logout">
                                    
                                    <i className="fas fa-sign-out-alt fa-fw me-2"></i>Đăng xuất
                                </Link>
                            </li>
                        </ul>                                  
                    </div>                        
                </div>
            </div>
        </div>	              
    </div>

    )
}
export default Menu