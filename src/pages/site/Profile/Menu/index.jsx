import React from 'react';
import { Link, NavLink } from "react-router-dom";


function Menu(infoUser) {

    return(
        <div className="col-lg-4 col-xl-3">          
        <div className="offcanvas-lg offcanvas-end" tabIndex="-1" id="offcanvasSidebar">                
            <div className="offcanvas-header justify-content-end pb-2">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close"></button>
            </div>                     
            <div className="offcanvas-body p-3 p-lg-0">
                <div className="card bg-light w-100">                   
                    <div className="position-absolute top-0 end-0 p-3">
                        <Link to="/ho-so-ca-nhan" className="text-primary-hover" data-bs-toggle="tooltip" data-bs-title="Edit profile">
                            <i className="bi bi-pencil-square"></i>
                        </Link>
                    </div>
                    
                    <div className="card-body p-3">                              
                        <div className="text-center mb-3">                                    
                            <div className="avatar avatar-xl mb-2">
                                <img className="avatar-img rounded-circle border border-2 border-white" src={infoUser.infoUser.avatar} alt="Avatar" />
                            </div>
                            <h6 className="mb-0">{infoUser.infoUser.name}</h6>
                            <Link to="#" className="text-reset text-primary-hover small">{infoUser.infoUser.role_name}</Link>
                            <hr />
                        </div>
                        
                        <ul className="nav nav-pills-primary-soft flex-column">
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/ho-so-ca-nhan/">
                                    <i className="bi bi-person fa-fw me-2"></i>Thông tin cá nhân
                                </NavLink>
                            </li>
                            {
                                infoUser.infoUser.role_id === 2 ?
                               <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/ho-so-ca-nhan/lich-kham">
                                        <i className="bi bi-people fa-fw me-2"></i>Danh sách lịch khám
                                    </NavLink>
                                </li>
                                 <li className="nav-item">
                                 <NavLink className="nav-link" to="/ho-so-ca-nhan/dat-lich-kham">
                                     <i className="bi bi-people fa-fw me-2"></i>Đặt lịch khám
                                 </NavLink>
                                </li>
                               </>
                                :
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/ho-so-ca-nhan/lich-kham">
                                        <i className="bi bi-people fa-fw me-2"></i>Lịch khám của tôi
                                    </NavLink>
                                 </li>
                            }
                           
{/* 
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/ho-so-ca-nhan/chinh-sua">
                                    <i className="bi bi-gear fa-fw me-2"></i>Chỉnh sửa
                                </NavLink>
                            </li> */}
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