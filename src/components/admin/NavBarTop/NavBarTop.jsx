
import "./NavBarTop.scss";

function NavBarTop() {
    return ( 
        <nav className="navBarTop">
            <div className="navBarTop-left">
                <a className="navBarTop-toggle">
                    <i className="bi bi-justify-left"></i>
                </a>
            </div>
            <div className="navBarTop-right">
                <div className="navBarTop-alert">
                    <div className="navBarTop-alert-wrapper">
                        <i className="bi bi-chat"></i>
                        <div className="navBarTop-alert-count">
                            <span>5</span>
                        </div>
                    </div>
                </div>
                <div className="navBarTop-avatars">
                    <div className="avatar">
                        <img src="https://appstack.bootlab.io/img/avatars/avatar.jpg" alt="" />
                    </div>
                    <div className="navBarTop-avatars-content">
                        <span>Phan Van</span>
                        <i className="bi bi-chevron-down"></i>
                    </div>
                </div>
            </div>
        </nav>
     );
}

export default NavBarTop;