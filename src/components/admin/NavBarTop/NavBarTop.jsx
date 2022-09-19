
import "./NavBarTop.scss";

function NavBarTop() {
    return ( 
        <nav className="navBarTop">
            <div className="navBarTop-left">
                <a class="navBarTop-toggle">
                    <i class="bi bi-justify-left"></i>
                </a>
            </div>
            <div className="navBarTop-right">
                <div className="navBarTop-alert">
                    <div className="navBarTop-alert-wrapper">
                        <i class="bi bi-chat"></i>
                        <div className="navBarTop-alert-count">
                            
                        </div>
                    </div>
                </div>
                <div className="navBarTop-avatars">
                    <div className="avatar">
                        <img src="https://appstack.bootlab.io/img/avatars/avatar.jpg" alt="" />
                    </div>
                    <div className="navBarTop-avatars-content">
                        <span>Phan Van</span>
                        <i class="bi bi-chevron-down"></i>
                    </div>
                </div>
            </div>
        </nav>
     );
}

export default NavBarTop;