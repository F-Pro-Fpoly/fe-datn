
import { Link } from "react-router-dom";
import NavBarItem from "../NavBarItem";
import "./NavBarAdmin.scss";
import {useRef} from "react";
import { useEffect } from "react";

function NavBarAdmin({className}) {
    return ( 
        <aside className={`navBarAdmin ${className}`}>
            <Link className="navBarAdmin-logo" to="/admin">
                <span className="navBarAdmin-logo-text">AppLogo</span>
            </Link>

            <div className="navBarAdmin-main">
                <NavBarItem name="Dashboard" icon="bi bi-speedometer2" countTitle="5" to="/admin" />
                <NavBarItem id="users" name="Quản lý user" countTitle="7" dropdownArr={[
                    {
                        name: "Thêm user",
                        to: "/admin/add-user"
                    },
                    {
                        name: "List user",
                        to: "/admin/list-user"
                    },
                ]} icon="bi bi-speedometer2" />
                <NavBarItem id="category" name="Quản lý category" dropdownArr={[
                    {
                        name: "Thêm category",
                        to: "/admin/add-user"
                    },
                    {
                        name: "List category",
                        to: "/admin/list-user"
                    },
                ]} icon="bi bi-speedometer2" />
                <NavBarItem id="sick" name="Danh mục bệnh" dropdownArr={[
                    {
                        name: "Thêm bệnh",
                        to: "/admin/sick/add"
                    },
                    {
                        name: "Danh sách bệnh",
                        to: "/admin/sick/list"
                    },
                ]} icon="bi bi-speedometer2" />
                <NavBarItem id="booking" name="Đặt lịch khám" dropdownArr={[
                    {
                        name: "Danh sách lịch khám",
                        to: "/admin/booking/list"
                    },
                ]} icon="bi bi-speedometer2" />
            </div>
        </aside>
     );
}

export default NavBarAdmin;