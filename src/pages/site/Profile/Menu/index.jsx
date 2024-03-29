import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

function Menu(infoUser) {
    const avt = useSelector(state => state.auth.user.avatar )
  
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
                                <img className="avatar-img rounded-circle border border-2 border-white" src={avt} alt="Avatar" />
                            </div>
                            <h6 className="mb-0">{infoUser.infoUser.name}</h6>
                            <Link to="#" className="text-reset text-primary-hover small">{infoUser.infoUser.role_name}</Link>
                            <hr />
                        </div>
                        
                        <ul className="nav nav-pills-primary-soft flex-column">
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/ho-so-ca-nhan/" end>
                                    <i className="bi bi-person fa-fw me-2"></i>Thông tin cá nhân
                                </NavLink>
                            </li>
                            {
                                infoUser.infoUser.role_id === 2 ?
                               <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={`/ho-so-ca-nhan/chi-tiet/${infoUser.infoUser.id}`}>
                                    <i className="bi bi-info-square"></i> Hồ sơ chi tiết
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/ho-so-ca-nhan/danh-sach-lich-kham">
                                    <i className="bi bi-card-checklist"></i> Danh sách lịch khám
                                    </NavLink>
                                </li>
                                 <li className="nav-item">
                                 <NavLink className="nav-link" to="/ho-so-ca-nhan/danh-sach-nguoi-benh">
                                 <i className="bi bi-person-lines-fill"></i> Danh sách bệnh nhân
                                 </NavLink>
                                </li>
                               </>
                                :
                               <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/ho-so-ca-nhan/lich-kham">
                                    <i className="bi bi-list-ul"></i>  Lịch khám của tôi
                                    </NavLink>
                                 </li>
                                 <li className="nav-item">
                                 <NavLink className="nav-link" to={`/ho-so-ca-nhan/ho-so-benh-an/${infoUser.infoUser.id}`}>
                                    <i className="bi bi-clipboard-plus"></i> Hồ sơ bệnh án
                                 </NavLink>
                              </li>
                               </>
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