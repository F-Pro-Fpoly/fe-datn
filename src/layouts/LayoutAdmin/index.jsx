import { Outlet } from "react-router-dom";
import NavBarAdmin from "../../components/admin/NavBarAdmin";
import NavBarTop from "../../components/admin/NavBarTop/NavBarTop";

import "./LayoutAdmin.scss";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import LoadingGlobal from "../../components/LoadingGlobal";

function LayoutAdmin() {
    const [navEl2, setNavEl2] = useState();
    const loading = useSelector(state => state.interface.loading)
    const adminRef = useRef();

    useEffect(()=>{
        document.title = "Admin";
        setNavEl2(adminRef.current)
    },[])


    return ( 
        <>
        <div className="admin" ref={adminRef}>
            <NavBarAdmin className="admin-aside"  />
            <main className="admin-main">
                <NavBarTop navEl2={navEl2} />
                <div className="admin-content">
                    <Outlet />
                </div>
            </main>
        {loading && <LoadingGlobal />}
        </div>
        </>
       
     );
}

export default LayoutAdmin;