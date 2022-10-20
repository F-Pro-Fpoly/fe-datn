
import { Link } from "react-router-dom";
import NavBarItem from "../NavBarItem";
import "./NavBarAdmin.scss";

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
                <NavBarItem id="specialist" name="Quản lý chuyên khoa" dropdownArr={[
                    {
                        name: "Thêm chuyên khoa",
                        to: "/admin/specialist/add"
                    },
                    {
                        name: "Danh sách chuyên khoa",
                        to: "/admin/specialist/list"
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


                <NavBarItem id="department" name="Quản lý phòng ban" dropdownArr={[
                    {
                        name: "Thêm phòng ban",
                        to: "/admin/phong-ban/add"
                    },
                ]} icon="bi bi-speedometer2" />
                <NavBarItem id="setting" name="Tiện ích mở rộng" dropdownArr={[
                    {
                        name: "Thiết lập Menu",
                        to: "/admin/chinh-sua-menu/list"
                    },
                ]} icon="bi bi-speedometer2" />
                
                 <NavBarItem name="Về trang người dùng" icon="bi bi-speedometer2"  to="../" />
            </div>
        </aside>
     );
}

export default NavBarAdmin;