import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ProfileNav.scss";

function ProfileNav() {
    const user = useSelector(state=>state.auth.user);

    return ( <>
    {
        user ?
        <>
            <li className="profile" id="profile-nav">           
                <div className="profile-avatars">
                    {/* <span>{user.name}</span>       */}
                    <img src={user.avatar} alt="" />
                </div>   
                <div className="profile-dropdown" >
                    <div className="profile-dropdown-item profile-dropdown-item-flex">
                        <div className="profile-dropdown-avatars">
                            <img src={user.avatar} alt="" />
                        </div>
                        <div className="profile-dropdown-content">
                            <p><span className="profile-dropdown-name">{user.name}</span></p>
                            <p><span className="profile-dropdown-email">{user.email}</span></p>
                        </div>
                    </div>
                    <ul className="profile-dropdown-item ul-list">
                        <li>
                            <Link to="/"><i className="fa-regular fa-bookmark"></i><span>My Booking</span></Link>
                        </li>
                        <li>
                            <Link to="/"><i className="fa-regular fa-user"></i><span>My Account</span></Link>
                        </li>
                        <li>
                            <Link to="/"><i className="fa-solid fa-gear"></i><span>Setting</span></Link>
                        </li>
                        {
                            (user.role_id == 2 || user.role_id == 1) ? (
                                <li>
                                    <Link to="/admin"><i className="fa-solid fa-screwdriver-wrench"></i><span>Admin</span></Link>
                                </li>
                            ):""
                        }
                        <li>
                            <Link to="/logout"><i class="fa-solid fa-right-from-bracket"></i><span>Logout</span></Link>
                        </li>
                    </ul>
                </div>
            </li>
        <li>
            
        </li>
        </>
        : 
        <>
            <li className="text-light">
                <i className="fa-solid fa-right-to-bracket"></i>
                <Link className="text-light" to="/login"><span>Đăng nhập</span></Link>  
            </li>
            <li className="text-light">                       
                <Link className="text-light" to="/register"><span>Đăng ký</span></Link>                         
            </li>
        </>
    }

    </> );
}

export default ProfileNav;