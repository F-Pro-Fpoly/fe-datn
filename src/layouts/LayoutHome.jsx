import {Outlet} from 'react-router-dom'; 
function LayoutHome() {
    return ( 
        <div>
            <h2>Home Layout</h2>
            <Outlet />
            <h2>Footer</h2>
        </div>
     );
}

export default LayoutHome;