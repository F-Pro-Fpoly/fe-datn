
import { useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./NavBarTop.scss";
import {useDispatch, useSelector} from "react-redux";
import Logout from "../../../pages/auth/Logout/Logout";
import { getDatabase, ref, child, get ,onValue, orderByChild, startAt, equalTo, query,  push, update} from "firebase/database";
import { database } from "../../../firebase";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
function NavBarTop({navEl2}) {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const [data,setData] = useState([])
    const [quantity,setQuantity] = useState();
    const [result,setResult] = useState([]);

    const handleNavM = () =>{
        navEl2.classList.toggle('admin-toggle');
    }

    useEffect(() => {
       try {
        const db = getDatabase();
        const starCountRef = query(ref(db, 'contact'), orderByChild('status'), equalTo("A"));
        onValue(starCountRef , (snapshot) => {
        const data = snapshot.val();
        setData(data);

        let objectArray = Object.values(data);
        setResult(objectArray)

        let quatity = snapshot.size
        setQuantity(quatity)
        });

       } catch (error) {
        
       }
       
    
    }, [])

    // const HandleUpdatestatus = (e) => {
    //     const db = getDatabase();

    //     // A post entry.
    //     const status = {
    //         status : "B"
    //     };
        
    //     let key = Object.keys(data);
    //     const updates = {};
    //     key.map((i,v) => {     
    //         updates['/contact/' + i] = status       
    //     })
      
 
    //     return update(ref(db), updates);
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
                    <div className="navBarTop-alert-wrapper"
            
                    id="menu-alert" data-bs-toggle="dropdown"  aria-expanded="false" type="button">
                        <i className="bi bi-chat"></i>
                        <div className="navBarTop-alert-count">
                            <span>{quantity? quantity : 0 }</span>
                        </div>
                    </div>
                    <DropdownMenu id="menu-alert" className="dropdown-menu-secondary"
                    
                    >
                        <ul className="navBarTop-list">
                            <li className="navBarTop-item">              
                                { result.map((item,index) => {
                                    return(                                       
                                    <Link to="/admin/lien-he/danh-sach-lien-he" className="navBarTop-link" key={index}>
                                        <div style={{borderBottom: "1px solid #ccc"}}>                                                        
                                            <p style={{fontWeight: "700"}}>Tên người gửi: {item.username}</p>                                
                                            <p>Nội dung: {item.content}</p>
                                        </div>
                                    </Link>                                                                  
                                    )
                                }) }                       
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
                            {/* <li className="navBarTop-item">
                                <Link to="/profile" className="navBarTop-link">Profile</Link>
                            </li>
                            <li className="navBarTop-item">
                                <Link to="/profile" className="navBarTop-link">Profile</Link>
                            </li> */}
                            <li className="navBarTop-item">
                                <Link to="/logout" className="navBarTop-link">Đăng xuất</Link>
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