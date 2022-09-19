import { Outlet } from "react-router-dom";
import NavBarAdmin from "../../components/admin/NavBarAdmin";
import NavBarTop from "../../components/admin/NavBarTop/NavBarTop";

import "./LayoutAdmin.scss";

function LayoutAdmin() {
    return ( 
        <>
        <div className="admin">
            <NavBarAdmin className="admin-aside" />
            <main className="admin-main">
                <NavBarTop />
                <Outlet />
            </main>
        </div>
        </>
       
     );
}

export default LayoutAdmin;