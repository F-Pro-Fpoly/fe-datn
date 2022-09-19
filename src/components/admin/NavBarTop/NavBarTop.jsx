
import { useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./NavBarTop.scss";

function NavBarTop({navEl2}) {
    const handleNavM = () =>{
        navEl2.classList.toggle('admin-toggle');
    }
    return ( 
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
                            <span>5</span>
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
                                <Link to="/logout" className="navBarTop-link">Logout</Link>
                            </li>
                        </ul>
                    </DropdownMenu>
                </div>
                <div className="navBarTop-avatars dropdown" >
                    <div className="avatar">
                        <img src="https://appstack.bootlab.io/img/avatars/avatar.jpg" alt="" />
                    </div>
                    <div className="navBarTop-avatars-content dropdown-toggle" id="menu-avata" data-bs-toggle="dropdown"  aria-expanded="false" type="button">
                        <span>Phan Van</span>
                    </div>
                    <DropdownMenu id="menu-avata">
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
     );
}

export default NavBarTop;