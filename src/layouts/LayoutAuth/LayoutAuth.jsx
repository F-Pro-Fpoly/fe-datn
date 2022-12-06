import {Outlet} from 'react-router-dom'; 
import "./LayoutAuth.scss";


function LayoutAuth() {
    return ( 
        <div className='bg-img'>
            <Outlet />
        </div>
     );
}

export default LayoutAuth;