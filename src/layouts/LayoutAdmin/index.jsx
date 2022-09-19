import { Outlet } from "react-router-dom";
import NavBarAdmin from "../../components/admin/NavBarAdmin";
import NavBarTop from "../../components/admin/NavBarTop/NavBarTop";

import "./LayoutAdmin.scss";
import { useState } from "react";
import { useEffect, useRef } from "react";

function LayoutAdmin() {
    const [navEl2, setNavEl2] = useState();
    const adminRef = useRef();

    useEffect(()=>{
        setNavEl2(adminRef.current)
    },[])


    return ( 
        <>
        <div className="admin" ref={adminRef}>
            <NavBarAdmin className="admin-aside"  />
            <main className="admin-main">
                <NavBarTop navEl2={navEl2} />
                <Outlet />
            </main>
        </div>
        </>
       
     );
}

export default LayoutAdmin;