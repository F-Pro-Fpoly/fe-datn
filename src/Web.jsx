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
import Clinic from "./pages/site/Clinic";
import AddUser from "./pages/admin/User/AddUser/AddUser";
import ListUser from "./pages/admin/User/ListUser/ListUser";
import Logout from "./pages/auth/Logout/Logout";

import AddSick from "./pages/admin/Sicks/AddSick/AddSick";
import ListSick from "./pages/admin/Sicks/ListSick/ListSick";
import UpdateSick from "./pages/admin/Sicks/UpdateSick/UpdateSick";

import ListBooking from "./pages/admin/Booking/ListBooking/ListBooking";
import AddSpecialist from "./pages/admin/Specialists/AddSpecialist/AddSpecialist";
import ListSpecialist from "./pages/admin/Specialists/ListSpecialist/ListSpecialist";
import AddDepartment from "./pages/admin/Department/AddDepartment/AddDepartment";
import UpdateUser from "./pages/admin/User/UpdateUser/UpdateUser";
import SpecialistClient from "./pages/site/SpecialistClient";
import Book from "./pages/site/Book";
import ListDepartment from "./pages/admin/Department/ListDepartment/ListDepartment";
import UpdateDepartment from "./pages/admin/Department/UpdateDepartment/UpdateDepartment";
import ListMenu from "./pages/admin/Setttings/Menu/ListMenu/ListMenu";
import AddMenu from "./pages/admin/Setttings/Menu/AddMenu/AddMenu";
import About from "./pages/site/About";
import Contact from "./pages/site/Contact";
import CreateDalandar from "./pages/admin/Calendar/Create/CreateDelandar";
import ListConfig from "./pages/admin/Setttings/Config/ListConfig/ListConfig";
import AddConfig from "./pages/admin/Setttings/Config/AddConfig";
import UpdateConfig from "./pages/admin/Setttings/Config/UpdateConfig";
import Profile from "./pages/site/Profile";
import News from "./pages/site/News";
import DetailNews from "./pages/site/DetailBlog";
import UpdateSpecialist from "./pages/admin/Specialists/UpdateSpecialist/UpdateSpecialist";

import AddNews from "./pages/admin/News/AddNews";
import ListNews from "./pages/admin/News/ListNews";
import UpdateNews from "./pages/admin/News/UpdateNews";

import AddNewsCategory from "./pages/admin/NewsCategory/AddNewsCategory";
import ListNewsCategory from "./pages/admin/NewsCategory/ListNewsCategory";
import UpdateNewsCategory from "./pages/admin/NewsCategory/Update";

import ProfileDoctor from "./pages/site/Profile/Doctor/ProfileDoctor";
import UpdateMenu from "./pages/admin/Setttings/Menu/UpdateMenu";
import ChartCovid from "./pages/site/ChartCovid";
import Vaccine from "./pages/site/Vaccine/Vaccine";

import ListCateVaccine from "./pages/admin/Vaccine/ListCateVaccine/ListCateVaccine";
import ListContact from "./pages/admin/Contact/ListContact/ListContact";
import ListContactBooking from "./pages/admin/Contact/ListContactBooking/ListContactBooking";

import ReplyContactBooking from "./pages/admin/Contact/ListContactBooking/replyContactBooking";
import ReplyContact from "./pages/admin/Contact/ListContact/replyContact";
import ListNewsletter from "./pages/admin/Newsletter/ListNewsletter";
import ListBanner from "./pages/admin/Setttings/Banner/ListBanner";
import UpdateCateVaccine from "./pages/admin/Vaccine/ListCateVaccine/UpdateCateVaccine";
import UpdateVaccine from "./pages/admin/Vaccine/UpdateVaccine";
import AddVaccine from "./pages/admin/Vaccine/AddVaccine";
import AddBanner from "./pages/admin/Setttings/Banner/AddBanner";
import UpdateBanner from "./pages/admin/Setttings/Banner/UpdateBanner";
import ListVaccine from "./pages/admin/Vaccine/ListVaccine";
function Web() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    return ( 
        <>
            <Routes>
                <Route path="*" element={<NotFound/>} />
                <Route element={<LayoutHome />}>
                    <Route path="/"  element={<HomePage />}/>
                    <Route path="/chuyen-khoa"  element={<SpecialistClient />}/>
                    <Route path="/chuyen-khoa/:slug"  element={<Clinic />}/>             
                    <Route path="/dang-ky-lich"  element={<Book />}/>             
                    <Route path="/ve-chung-toi"  element={<About />}/>
                   
                    <Route path="/bieu-do-covid"  element={<ChartCovid />}/>
                    <Route path="/lien-he"  element={<Contact />}/>
                    <Route path="/ho-so-ca-nhan/*"  element={ AuthMiddlware ( <Profile /> )}/>  
                    <Route path="/doi-ngu-bac-si/:slug/:id"  element={  <ProfileDoctor /> }/>  
                    <Route path="/vaccine" element={ <Vaccine /> } />
                   
                    <Route path="/tin-tuc/*"  element={<News />}/>
                    <Route path="/tin-tuc/:slug"  element={ (<DetailNews />)}/>
           
                </Route>
               
                <Route element={<LayoutAuth />}>
                    <Route path="/register"  element={<Register />}/>
                    <Route path="/login"  element={<Login />}/>
                    <Route path="/logout"  element={<Logout />}/>
                </Route>
                <Route element={ RoleMiddleware([1, 2] ,<LayoutAdmin/>) } path="admin">
                    <Route index  element={<div><Dashboard/></div>}/>
                    <Route  element={<Dashboard/> } path ='admin'/>

                    <Route path="sick">
                        <Route  element={<AddSick/> } path ='add'/>
                        <Route  element={<ListSick/> } path ='list'/>
                        <Route  element={<UpdateSick/> } path ='update/:id'/>
                    </Route>
                    <Route path="specialist">
                        <Route  element={<AddSpecialist/> } path ='add'/>
                        <Route  element={<ListSpecialist/> } path ='list'/>
                        <Route  element={<UpdateSpecialist/> } path ='update/:id'/>
                    </Route>
                    <Route path="booking">
                        <Route  element={<ListBooking/> } path ='list'/>
                        <Route  element={<CreateDalandar/> } path ='add'/>
                    </Route>

                    <Route path="phong-ban">
                        <Route element={<AddDepartment />} path="add" />
                        <Route element={<ListDepartment />} path="list" />
                        <Route element={<UpdateDepartment />} path="update/:id" />
                        {/* <Route element={<Schedule />} path=":id/lich-kham" /> */}
                    </Route>

                    <Route path="lien-he">
                        <Route element={<ListContact />} path="danh-sach-lien-he" />
                        <Route element={<ListContactBooking />} path="danh-sach-dang-ky-lich-kham" />
                        <Route element={<ReplyContact />} path="tra-loi-lien-he/:id" />
                        <Route element={<ReplyContactBooking />} path="tra-loi-dang-ky-lich/:id" />
                    </Route>

                    <Route path="tin-som">
                        <Route element={<ListNewsletter />} path="danh-sach-nhan-tin-som" />                 
                    </Route>

                    <Route path="chinh-sua-menu">
                        <Route element={< ListMenu />} path="list" />
                        <Route element={< AddMenu />}  path="add" />
                        <Route element={< UpdateMenu />}  path="update/:id" />
                    </Route>

                    <Route path="quan-ly-banner">
                        <Route element={< ListBanner />} path="list" />
                        <Route element={< AddBanner />}  path="add" />
                        <Route element={< UpdateBanner />}  path="update/:id" />
                    </Route>

                    <Route path="cau-hinh-chung">
                        <Route element={< ListConfig />} path="list" />
                        <Route element={< AddConfig />}  path="add" />
                        <Route element={< UpdateConfig />} path="update/:id" />
                    </Route>
                    <Route path="tin-tuc">
                        <Route element={< ListNews />} path="list" />
                        <Route element={< AddNews />}  path="add" />
                        <Route element={< UpdateNews />} path="edit/:id" />
                    </Route>
                    <Route path="danh-muc">
                        <Route element={< ListNewsCategory />} path="list" />
                        <Route element={< AddNewsCategory />}  path="add" />
                        <Route element={< UpdateNewsCategory />} path="update/:id" />
                    </Route>
                    <Route path="contact">
                        <Route element={< ListContact />} path="list" />
                    </Route>
                    <Route path="vaccine">
                        <Route element={< ListCateVaccine />} path="list-cate" />
                        <Route element={<UpdateCateVaccine />} path="update-cate/:id" />
                        <Route element={<UpdateVaccine />} path="update/:id" />
                        <Route element={<AddVaccine />} path="add" />
                        <Route element={<ListVaccine />} path="list" />
                    </Route>


                    <Route path="/admin/add-user"  element={<AddUser />}/>  
                    <Route path="/admin/list-user"  element={<ListUser />}/>  
                    <Route path="/admin/update-user/:id"  element={<UpdateUser />}/>  
                </Route>
            </Routes>
        </>
     );
}

export default Web;