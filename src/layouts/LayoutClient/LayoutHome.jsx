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
    const loadingGlobal = useSelector(state => state.interface.loading);
    useEffect(() => {
        if(window.scrollY != 0) {
            goToTop(); 
        }
    }, [path]);
    // const scrollToTop = () =>{
    //     if (window.scrollY > 400) {
    //         setShowTopBtn(true);
    //     } else {
    //         setShowTopBtn(false);
    //     }
    // }

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
 
    // const [getconfig, setConfig] = useState([])

    // useEffect(() => {
    //     const config = async () => {
    //         let respon = await ListConfigService()
    //         let dataa = respon.data;
    //         let dataArrr = dataa.data;
    //         setConfig(dataArrr)
    //     }
     
    //     config();
    // }, [])
  
    return ( 
        <>
            {loadingGlobal && <LoadingGlobal />}
            <Nav />
            <div className="main">                           
                <Outlet />  
                <ScrollToTop />      
                <Footer />    
            </div>
        </>
     );
   
}

export default LayoutHome;