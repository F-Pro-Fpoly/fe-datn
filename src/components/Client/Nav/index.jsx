import { Link, useLocation} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from "react";
import logo from "../../../image/logo.png"
import { getListServiceAPI } from "../../../services/normal/MenuService";
import "./Nav.scss"

function Nav (){
    const path = useLocation()
    const navRef = useRef();
    const pathname = path.pathname
    let user = useSelector((state => state.auth.user));

    const [ListMenu, getListListMenu] = useState([]);



    useEffect (() => {

        const start = async () => {
            getListListMenu([])
            let res = await getListServiceAPI() 
            let data = res.data 
            let dataArr = data.data 
            getListListMenu(dataArr)
        }
      
        start();

        console.log(pathname);
        if(pathname === '/'){
            const  a = navRef.current.classList
            a.remove('bg')   
            window.onscroll = function() {myFunction()};
            const myFunction = () => {
                if (document.documentElement.scrollTop > 100) {     
                    const  a = navRef.current.classList
                    a.add('bg')               
                }else{
                    const  a = navRef.current.classList
                    a.remove('bg')
                }    
            }     
        }
        else{
            const  a = navRef.current.classList
            a.add('bg')
        }
    }, [] )
   
    return(   
            <div className="navb" ref={navRef}>
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
       
   
       
    )
}   

export default Nav; 