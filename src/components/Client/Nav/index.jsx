import { Link, useLocation} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import logo from "../../../image/logo.png"
import { getListServiceAPI } from "../../../services/normal/MenuService";
import "./Nav.scss"
function Nav (){
    const path = useLocation()
    const navRef = useRef();
   
    let user = useSelector((state => state.auth.user));
    // let navb = useSelector((state => state.interface.navb));

    const [ListMenu, getListListMenu] = useState([]);
    const [pathName, setPathName]     = useState(path.pathname);
    const [showMenuMobile, setShowMenuMobile] = useState(false);

    

    useEffect(() => {
        const pathname = path.pathname
        setShowMenuMobile(false);
        const myFunction = () => {
            if (document.documentElement.scrollTop > 100) {             
                a.add('bg')               
            } 
            else{
                a.remove('bg')
            }
        }
        
        const  a = navRef.current.classList
        if(pathname == '/'){
            // handleClassNav();
            if(document.documentElement.scrollTop < 100) {
                if(a.contains('bg')) {
                    a.remove('bg');
                }
            }
            window.addEventListener("scroll", myFunction);
        }
        if(pathname != "/"){
            // window.addEventListener("scroll", () =>{console.log(123);});
            window.removeEventListener('scroll', myFunction);
            // handleClassNav()
            if(!a.contains('bg')) {
                a.add('bg');
            }
        }
        // else{
        //     a.add('bg')
        // }
        return function cleanupListener() {
            window.removeEventListener('scroll', myFunction)
        }
    }, [path])

    useEffect(() => {
        const start = async () => {
            getListListMenu([])
            let res = await getListServiceAPI() 
            let data = res.data 
            let dataArr = data.data 
            getListListMenu(dataArr)
        }
      
        start();
    }, [])
   
    return(   
        <>
            <div className="header">
                <div className={`navb`} ref={navRef}>
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
                                    <Link to={"lien-he"}>
                                        <i className="fa-solid fa-head-side-cough"></i>
                                        <span>Liên hệ</span>  
                                    </Link>             
                                </li>
                                {
                                user ?
                                <>
                                    <li>           
                                    <div className="info">
                                    <span>{user.name}</span>      
                                        </div>   
                                        <div className="drop-down">
                                            {/* <span className="arrow-up"></span> */}
                                            <div className="drop-down-item">
                                                <div className="drop-down-icon">
                                                    <i className="fa-solid fa-user"></i>               
                                                    <Link to="/profile"><span> Hồ sơ cá nhân</span></Link>
                                                </div>
                                                {
                                                (user.role_id == 1 || user.role_id == 2) &&
                                                    <div className="drop-down-icon">
                                                        <i className="fa-solid fa-gears"></i>                                
                                                        <Link to="/admin"><span>Trang quản trị</span></Link> 
                                                    </div>                         
                                                }
                                                <div className="drop-down-icon">
                                                <i class="fa-solid fa-right-from-bracket"></i>
                                                    <Link to="/logout"><span>Đăng xuất</span></Link>  
                                                </div>
                                            </div>
                                        </div>                                       
                                    </li>
                                <li>
                                    
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
                            {
                            ListMenu.map((val, index)=>(
                                    
                                <li key={val.id}>
                                    <Link to={val.slug}>
                                        <span dangerouslySetInnerHTML={{__html: val.font}} /> 
                                        <span>{val.name}</span>                   
                                    </Link>      
                                </li>
                            ))
                            }                                     
                            </ul>   
                        </div>
                    </div>
                </div>
            </div>

            <div className="navb-mobile">
                <div className="container">
                    <div className="navb-mobile-wrapper1">
                        <div className="navb-mobile-logo">
                            <Link to="/">
                                <img src={logo} alt="logo" width="60"  />
                            </Link>
                        </div>
                        <div className="navb-mobile-content">
                            <div className="navb-mobile-bars" onClick={() => setShowMenuMobile(true)}>
                                <i className="fa-solid fa-bars"></i>
                            </div>
                            <div className="navb-mobile-contact">
                                <i className="fa-regular fa-bell"></i>
                            </div>
                            <div className="navb-mobile-avatars">
                                <img src="https://booking.webestica.com/assets/images/avatar/01.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`menu-mobile ${showMenuMobile ? 'active':""}`}>
                <div className="menu-mobile-wrapper">
                    <ul>
                    {
                    ListMenu.map((val, index)=>(
                            
                        <li key={val.id}>
                            <Link to={val.slug}>
                                {/* <span dangerouslySetInnerHTML={{__html: val.font}} />  */}
                                <span>{val.name}</span>                   
                            </Link>      
                        </li>
                    ))
                    }                                     
                    </ul>   
                </div>
                <button className="menu-mobile-btn" onClick={() => setShowMenuMobile(false)}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div className={`menu-mobile-man ${showMenuMobile ? 'active':''}`}></div>
        </>    
    )
}   

export default Nav; 