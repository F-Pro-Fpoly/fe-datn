import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutAuth from "./layouts/LayoutAuth/LayoutAuth";
import LayoutHome from "./layouts/LayoutClient/LayoutHome";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Resgister/Register";
import HomePage from "./pages/site/Home/HomePage";
import {RoleMiddleware, AuthMiddlware} from "./Middleware";
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./pages/admin/Dashboard";
import CategoryNav from "./pages/site/CategoryNav";
import Clinic from "./pages/site/Clinic";
import Doctor from "./pages/site/Doctor";
import AddUser from "./pages/admin/User/AddUser/AddUser";
import ListUser from "./pages/admin/User/ListUser/ListUser";
import Logout from "./pages/auth/Logout/Logout";



function Web() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    return ( 
        <>
            <Routes>
                <Route path="*" element={<NotFound/>} />
                <Route element={<LayoutHome />}>
                    <Route path="/"  element={<HomePage />}/>
                    <Route path="/chuyenkhoa"  element={<CategoryNav />}/>
                    <Route path="/chuyenkhoa/co-xuong-khop"  element={<Clinic />}/>             
                    <Route path="/bacsi"  element={<Doctor />}/>             
                    <Route path="/about"  element={<h2>About</h2>}/>
                </Route>

                <Route element={<LayoutAuth />}>
                    <Route path="/register"  element={<Register />}/>
                    <Route path="/login"  element={<Login />}/>
                    <Route path="/logout"  element={<Logout />}/>
                </Route>
                <Route element={ RoleMiddleware([1, 2] ,<LayoutAdmin/>) } path="admin">
                    <Route index  element={<div>admin</div>}/>
                    <Route  element={<Dashboard/> } path ='dashboard'/>
                    <Route path="/admin/add-user"  element={<AddUser />}/>  
                    <Route path="/admin/list-user"  element={<ListUser />}/>  

                </Route>
            </Routes>
        </>
     );
}

export default Web;