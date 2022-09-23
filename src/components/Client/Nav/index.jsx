import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./Nav.scss"
import logo from "../../../image/logo192.png"
function Nav (){
    let user = useSelector((state => state.auth.user));
    return(
     
       <>
       
       <div className="nav">
            <div className="logo">
                <img src={logo} alt="logo" width="60"  />
            </div>
            <div className="main-menu">
                <ul>
                    {/* <li>
                        <Link to="/home">
                            <h4>Trang chủ</h4>
                            <p></p>
                        </Link>      
                    </li> */}
                    <li>
                        <Link to="/home">
                        <h4>Cơ sở y tế</h4>
                        <p>Tìm bác sĩ chuyên khoa</p>
                        </Link>  
                    </li>
                    <li>
                        <Link to="/home">
                        <h4>Bác sĩ</h4>
                        <p>Chọn bác sĩ giỏi</p>    
                        </Link>  
                    </li>
                    <li>
                        <Link to="/home">
                            <h4>Gói khám</h4>    
                            <p>Khám sức khỏe tổng quát</p>
                        </Link>  
                    </li>           
                    <li>
                        <Link to="/home">
                            <h4>Vaccin</h4>    
                            <p>Đăng ký tiêm ngừa vaccsin</p>
                        </Link>  
                    </li>           
                </ul>
               
            </div>
            <div className="login">
                <ul>
                    <li>                       
                    {
                        user ?
                        <a>
                            {user.name}
                        </a> 
                        :
                        <Link to="/login"><h4>Đăng nhập</h4></Link>          
                    }
                    </li>
                    <li>                       
                        <Link to="/register"><h4>Đăng ký</h4></Link>                         
                    </li>
                </ul>
            </div>
        </div>
       </>
       
    )
}   

export default Nav; 