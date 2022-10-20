import {Outlet} from 'react-router-dom'; 
import Footer from '../../components/Client/Footer';
import Nav from '../../components/Client/Nav';
import ScrollToTop from '../../components/Scroll/Scroll';
import "./LayoutHome.scss"

function LayoutHome() {
 
    return ( 
        <div className="main">        
            <Nav/>           
            <Outlet />  
            <ScrollToTop />      
            <Footer/>    
        </div>
     );
   
}

export default LayoutHome;