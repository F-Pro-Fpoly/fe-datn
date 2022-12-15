
import { useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./NavBarTop.scss";
import {useDispatch, useSelector} from "react-redux";
import Logout from "../../../pages/auth/Logout/Logout";
import { getDatabase, ref, child, get ,onValue} from "firebase/database";
import { database } from "../../../firebase";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
function NavBarTop({navEl2}) {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const [data,setData] = useState()
    const [quantity,setQuantity] = useState()
    const handleNavM = () =>{
        navEl2.classList.toggle('admin-toggle');
    }

    useEffect(() => {
        const db = getDatabase();
        const starCountRef = ref(db, 'notification/');
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setData(data);
        let quatity = snapshot.size
        setQuantity(quatity)
        });
    }, [])
    
    // console.log(data["-NJEiwE4wg6t9chFv_6e"]);
    // if(data){
    //     toast.success("Có 1 tin nhắn mới");
    // }
    return ( 
       <>
        <ToastContainer />
        <nav className="navBarTop">
                      
            <div className="navBarTop-left">
                <a className="navBarTop-toggle" onClick={handleNavM}>
                    <i className="bi bi-justify-left"></i>
                </a>
            </div>
            <div className="navBarTop-right">
                <div className="navBarTop-alert dropdown">
                    <div className="navBarTop-alert-wrapper" id="menu-alert" data-bs-toggle="dropdown"  aria-expanded="false" type="button">
                        <i className="bi bi-chat"></i>
                        <div className="navBarTop-alert-count">
                            <span>{quantity}</span>
                        </div>
                    </div>
                    <DropdownMenu id="menu-alert" className="dropdown-menu-secondary">
                        <ul className="navBarTop-list">
                            <li className="navBarTop-item">
                                <Link to="/profile" className="navBarTop-link">Profile</Link>
                            </li>
                            <li className="navBarTop-item">
                                <Link to="/profile" className="navBarTop-link">Profile</Link>
                            </li>
                            <li className="navBarTop-item">
                                <Link to="/logout" className="navBarTop-link">Đăng xuất</Link>
                            </li>
                        </ul>
                    </DropdownMenu>
                </div>
                <div className="navBarTop-avatars dropdown" >
                    <div className="avatar">
                        <img src={`${user.avatar}`} alt="" />
                    </div>
                    <div className="navBarTop-avatars-content dropdown-toggle" id="menu-avata" data-bs-toggle="dropdown"  aria-expanded="false" type="button">
                        <span>{user.name}</span>
                    </div>
                    <DropdownMenu id="menu-avata" className="menu-avata">
                        <ul className="navBarTop-list">
                            <li className="navBarTop-item">
                                <Link to="/profile" className="navBarTop-link">Profile</Link>
                            </li>
                            <li className="navBarTop-item">
                                <Link to="/profile" className="navBarTop-link">Profile</Link>
                            </li>
                            <li className="navBarTop-item">
                                <Link to="/logout" className="navBarTop-link">Logout</Link>
                            </li>
                        </ul>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
       </>
     );
}

export default NavBarTop;