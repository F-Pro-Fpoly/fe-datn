import { useEffect, useState } from 'react';
import {Outlet, useLocation} from 'react-router-dom'; 
import Footer from '../../components/Client/Footer';
import Nav from '../../components/Client/Nav';
import ScrollToTop from '../../components/Scroll/Scroll';
import { ListConfigService } from '../../services/normal/ConfigService';
import "./LayoutHome.scss"
import LoadingGlobal from "../../components/LoadingGlobal";
import { useSelector } from 'react-redux';

function LayoutHome() {
    const path = useLocation()
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [getconfig, setConfig] = useState([])

    const loadingGlobal = useSelector(state => state.interface.loading);

    useEffect(() => {
        if(window.scrollY != 0) {
            goToTop(); 
        }
    }, [path]);


    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
 
   const start = async () => {
  
        let respon = await ListConfigService()
        let dataa = respon.data;
        let dataArrr = dataa.data;
        setConfig(dataArrr)
   }

    useEffect(() => {
        start()

        const favicon =  document.getElementById("favicon");
        
        let a = process.env.REACT_APP_BE
        let  b = getconfig.favicon ? getconfig.favicon.description : "" 
        a += b
        favicon.href = a
    }, [])
  
    return ( 
        <>
            {loadingGlobal && <LoadingGlobal />}
            <Nav getconfig = {getconfig} />
            <div className="main">                           
                <Outlet />  
                <ScrollToTop />      
                <Footer getconfig = {getconfig} />    
            </div>
        </>
     );
   
}

export default LayoutHome;