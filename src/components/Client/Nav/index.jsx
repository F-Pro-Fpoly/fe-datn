import { Link, useLocation} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import logo from "../../../image/logo.png"
import {  getListServiceAPI } from "../../../services/normal/MenuService";
import "./Nav.scss"
import ProfileNav from "../ProfileNav/ProfileNav";
function Nav (getconfig){
    const path = useLocation()
    const navRef = useRef();
   
    let user = useSelector((state => state.auth.user));
    // let navb = useSelector((state => state.interface.navb));

    const [ListMenu, getListListMenu] = useState([]);
    const [pathName, setPathName]     = useState(path.pathname);
    const [showMenuMobile, setShowMenuMobile] = useState(false);
    // const [setting, setSetting ] = useState({
    //     ...getconfig.getconfig,

    // })
//   console.log(setting);

    
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
        console.log(getconfig);
        start();
    }, [])

    return(   
        <>
            <div className="header">
                <div className={`navb`} ref={navRef}>
                    <div className="logo">
                    <Link to="/">
                        <img src={`${process.env.REACT_APP_BE}${ getconfig.getconfig.logo ? getconfig.getconfig.logo.description : ""}`} alt="logo" width="170"  />
                    </Link>
                    </div>

                    <div className="Menu">
                        <div className="top-menu">
                            <ul>
                                <li>
                                    <i className="fa-solid fa-phone"></i>
                                    <span>{getconfig.getconfig.phone ? getconfig.getconfig.phone.description : ""}</span>
                                </li>
                                <li>
                                    <i className="fa-regular fa-envelope"></i>
                                    <span>{getconfig.getconfig.email ? getconfig.getconfig.email.description : ""}</span>
                                </li>
                                <li >
                                                                                             
                                        <i className="fa-regular fa-envelope" ></i>
                                    <Link to={"lien-he"} className="text-light">
                                        <span>Liên hệ</span>  
                                    </Link>             
                                </li>
                                <ProfileNav />
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