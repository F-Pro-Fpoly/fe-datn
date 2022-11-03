import { useEffect, useState } from 'react';
import {Outlet, useLocation} from 'react-router-dom'; 
import Footer from '../../components/Client/Footer';
import Nav from '../../components/Client/Nav';
import ScrollToTop from '../../components/Scroll/Scroll';
import "./LayoutHome.scss"

function LayoutHome() {
    const path = useLocation()
    const [showTopBtn, setShowTopBtn] = useState(false);
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
 
    return ( 
        <>
        <Nav />
        <div className="main">        
                       
            <Outlet />  
            <ScrollToTop />      
            <Footer/>    
        </div>
        </>
     );
   
}

export default LayoutHome;