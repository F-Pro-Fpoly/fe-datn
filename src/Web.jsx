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
import Logout from "./pages/auth/Logout/Logout";
import AddSick from "./pages/admin/Sicks/AddSick/AddSick";
import ListSick from "./pages/admin/Sicks/ListSick/ListSick";



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

                    <Route path="danh-muc-vaccine">
                        <Route  element={<AddSick/> } path ='add'/>
                        <Route  element={<ListSick/> } path ='list'/>
                    </Route>
                </Route>
            </Routes>
        </>
     );
}

export default Web;