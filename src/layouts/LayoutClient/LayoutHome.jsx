import { useEffect, useState } from 'react';
import {Outlet} from 'react-router-dom'; 
import Footer from '../../components/Client/Footer';
import Nav from '../../components/Client/Nav';
import ScrollToTop from '../../components/Scroll/Scroll';
import { ListConfigService } from '../../services/normal/ConfigService';
import "./LayoutHome.scss"

function LayoutHome() {
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