
import { Link } from "react-router-dom";
import NavBarItem from "../NavBarItem";
import "./NavBarAdmin.scss";
import {getCountAdmin} from "../../../services/global/Count"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function NavBarAdmin({className}) {
    const token = useSelector((state) => state.auth.token);
    const user = useSelector(state => state.auth.user);
    const [counts, setCounts] = useState({});
    let NavLich = [
        {
            name: "Danh sách lịch khám",
            to: "/admin/booking/list"
        },
    ]

    if(user.role_id == 2) {
        NavLich = [
            ...NavLich,
            {
                "name": "Tạo lịch",
                to: "/admin/booking/add"
            }
        ];
    }

    const start = async () =>{
        try {
            let res = await getCountAdmin({token});
            let data = res.data.data;
            setCounts(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        start();
    }, []);



    return ( 
        <aside className={`navBarAdmin ${className}`}>
            <Link className="navBarAdmin-logo" to="/admin">
                <span className="navBarAdmin-logo-text">AppLogo</span>
            </Link>

            <div className="navBarAdmin-main accordion" id="accordionExample">
                {user.role_id == 1 && (
                <>
                <NavBarItem name="Dashboard" icon="bi bi-speedometer2" to="/admin" />
                <NavBarItem id="users" name="Quản lý người dùng" countTitle={counts['user-count']} dropdownArr={[
                    {
                        name: "Thêm user",
                        to: "/admin/add-user"
                    },
                    {
                        name: "List user",
                        to: "/admin/list-user"
                    },
                ]} icon="bi bi-people-fill" />
                <NavBarItem id="specialist" name="Quản lý chuyên khoa" countTitle={counts['specialist-count']} dropdownArr={[
                    {
                        name: "Thêm chuyên khoa",
                        to: "/admin/specialist/add"
                    },
                    {
                        name: "Danh sách chuyên khoa",
                        to: "/admin/specialist/list"
                    },
                ]} icon="bi bi-people-fill" />
                <NavBarItem id="News" name="Quản lý tin tức" countTitle={counts['News-count']} dropdownArr={[
                    {
                        name: "Thêm tin tức ",
                        to: "/admin/tin-tuc/add"
                    },
                    {
                        name: "Danh sách tin tức",
                        to: "/admin/tin-tuc/list"
                    },
                ]} icon="bi bi-people-fill" />
                <NavBarItem id="NewsCategory" name="Quản lý danh mục tin" countTitle={counts['NewsCategory-count']} dropdownArr={[
                    {
                        name: "Thêm danh mục tin",
                        to: "/admin/danh-muc/add"
                    },
                    {
                        name: "Danh sách danh mục tin",
                        to: "/admin/danh-muc/list"
                    },
                ]} icon="bi bi-people-fill" />
                <NavBarItem id="sick" name="Danh mục bệnh" countTitle={counts['sick-count']} dropdownArr={[
                    {
                        name: "Thêm bệnh",
                        to: "/admin/sick/add"
                    },
                    {
                        name: "Danh sách bệnh",
                        to: "/admin/sick/list"
                    },
                ]} icon="bi bi-hospital" />
                </>
                
                )}
                
                
                <NavBarItem id="booking" name="Đặt lịch khám" countTitle={counts['booking-count']} dropdownArr={NavLich} icon="bi bi-bookmark-plus" />
                
                

                {
                    user.role_id ==1 && (
                    <>
                    <NavBarItem id="department" name="Quản lý phòng ban" countTitle={counts['Department-count']} dropdownArr={[
                    {
                        name: "Thêm phòng ban",
                        to: "/admin/phong-ban/add"
                    },
                    {
                        name: "Danh sách phòng ban",
                        to: "/admin/phong-ban/list"
                    }
                    ]} icon="bi bi-layout-text-sidebar" />
                    <NavBarItem id="setting" name="Tiện ích mở rộng" dropdownArr={[
                        {
                            name: "Thiết lập Menu",
                            to: "/admin/chinh-sua-menu/list"
                        },
                        {
                        name: "Quản lí banner",
                        to: "/admin/quan-ly-banner/list"
                    },
                    {
                        name: "Cấu hình chung",
                        to: "/admin/cau-hinh-chung/list"
                    },
                ]} icon="bi bi-file-break" />
                    </>
                    )
                }
                
                 <NavBarItem name="Về trang người dùng" icon="bi bi-house"  to="/" />
            </div>
        </aside>
     );
}

export default NavBarAdmin;