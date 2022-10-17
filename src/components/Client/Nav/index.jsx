import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import logo from "../../../image/logo.png"
import "./Nav.scss"

function Nav (){
    let user = useSelector((state => state.auth.user));
    return(
     
       <>
        <div className="container">
        <div className="navb">
            <div className="logo">
               <Link to="/">
                 <img src={logo} alt="logo" width="60"  />
               </Link>
            </div>

            <div className="Menu">
                <div className="top-menu">
                    <ul>
                        <li>
                            <i className="fa-solid fa-phone"></i>
                            <span>0794248804</span>
                        </li>
                        <li>
                            <i className="fa-regular fa-envelope"></i>
                            <span>example.job@gmail.com</span>
                        </li>
                        <li>
                        <i className="fa-duotone fa-user-headset"></i>                                                              
                            <Link>
                                <i className="fa-solid fa-head-side-cough"></i>
                                <span>Liên hệ</span>  
                            </Link>             
                        </li>
                        {
                        user ?
                    <>
                        <li>                                    
                            <Link to="/admin"><span>{user.name}</span></Link>                                                                 
                        </li>
                        <li>
                            <i className="fa-regular fa-arrow-up-left-from-circle"></i>
                            <Link to="/logout"><span>Đăng xuất</span></Link>     
                        </li>
                    </>
                        : 
                    <>
                        <li>
                            <i className="fa-solid fa-right-to-bracket"></i>
                            <Link to="/login"><span>Đăng nhập</span></Link>  
                        </li>
                        <li>                       
                            <Link to="/register"><span>Đăng ký</span></Link>                         
                        </li>
                    </>
                        }
                    </ul>
                </div>
    
                <div className="main-menu">
                    <ul>
                        <li>
                            <Link to="/">
                                <h4>Trang chủ</h4>                   
                            </Link>      
                        </li>
                        <li>
                            <Link to="/chuyenkhoa">
                                <h4>Cơ sở y tế</h4>                       
                            </Link>  
                        </li>
                        <li>
                            <Link to="/home">
                                <h4>Vaccin</h4>                    
                            </Link>  
                        </li>    
                        <li>
                            <Link to="/bacsi">
                                <h4>Về chúng tôi</h4>
                            </Link>  
                        </li>                                         
                        <li>
                            <Link to="/bacsi">
                                <h4>Về chúng tôi</h4>
                            </Link>  
                        </li>                                         
                        <li>
                            <Link to="/bacsi">
                                <h4>Về chúng tôi</h4>
                            </Link>  
                        </li>                                         
                        <li>
                            <Link to="/bacsi">
                                <h4>Về chúng tôi</h4>
                            </Link>  
                        </li>                                         
                        <li>
                            <Link to="/bacsi">
                                <h4>Về chúng tôi</h4>
                            </Link>  
                        </li>                                         
                    </ul>   
                </div>
            </div>

        </div>
        </div>
       </>
       
    )
}   

export default Nav; 