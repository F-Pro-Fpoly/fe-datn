import { Outlet } from "react-router-dom";
import NavBarAdmin from "../../components/admin/NavBarAdmin";

import "./LayoutAdmin.scss";

function LayoutAdmin() {
    return ( 
        <>
        <div className="admin">
            <NavBarAdmin className="admin-aside" />
            <main className="admin-main">
                <Outlet />
            </main>
        </div>
        </>
       
     );
}

export default LayoutAdmin;