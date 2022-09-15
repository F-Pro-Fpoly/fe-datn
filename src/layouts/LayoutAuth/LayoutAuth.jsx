import {Outlet} from 'react-router-dom'; 
import "./LayoutAuth.scss";


function LayoutAuth() {
    return ( 
        <div className='layout-auth'>
            <Outlet />
        </div>
     );
}

export default LayoutAuth;