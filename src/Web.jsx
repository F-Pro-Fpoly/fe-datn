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



function Web() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    return ( 
        <>
            <Routes>
                <Route path="*" element={<NotFound/>} />

                <Route element={<LayoutHome />}>
                    <Route path="/"  element={<HomePage />}/>
                    <Route path="/about"  element={<h2>About</h2>}/>
                </Route>

                <Route element={<LayoutAuth />}>
                    <Route path="/register"  element={<Register />}/>
                    <Route path="/login"  element={<Login />}/>
                </Route>
                <Route element={ RoleMiddleware([1, 2] ,<LayoutAdmin/>) } path="admin">
                    <Route index  element={<div>admin</div>}/>
                    <Route  element={<Dashboard/> } path ='dashboard'/>
                </Route>
            </Routes>
        </>
     );
}

export default Web;