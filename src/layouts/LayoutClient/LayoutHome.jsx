import {Outlet} from 'react-router-dom'; 
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import "./LayoutHome.scss"

function LayoutHome() {
    return ( 
        <div className="main">
            <Nav/>
            <Outlet />    
            <Footer/>    
        </div>
     );
}

export default LayoutHome;