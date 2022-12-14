import React, { useEffect, useState } from 'react';
import "./Profile.scss"
import {  Route, Routes  } from "react-router-dom";
import Info from './Info';
import Booking from './Booking/ListBookingUser';
import Details from './Booking/DetailBookingUser';
import Menu from './Menu';
import { useSelector } from 'react-redux';
import { getInfo } from '../../../services/UserService';
import CreateDalandar from './Doctor/AddBooking';
import ListBooking from './Doctor/ListBooking';
import DetailBooking from './Doctor/DetailBooking';
import { RoleMiddleware } from '../../../Middleware';
import ConfigProfile from './Doctor/ProfileDoctor/ConfigProfile';
import DetailBookingVaccineUser from './Booking/DetailBookingVaccineUser';

import ListPatient from './Doctor/ListPatient';
import DetailListPatient from './Doctor/DetailListPatient';
import MedicalRecord from './MedicalRecord';

function Profile () {

    const token = useSelector(state => state.auth.token )

    const [infoUser, setInfoUser] = useState([])
    const changGender = (input) => {
        setInfoUser({...infoUser, gender: input})
    }
    const changAvt = (input) => {
        setInfoUser({...infoUser, avatar: input})
    }
    const start  = async () =>{
        let res =  await  getInfo({token})
        let data =  res.data.data
        setInfoUser(data)
    }

    useEffect(() => {
        document.title = "Trang hồ sơ cá nhân"
        start()

        
    }, [])
  

    return (

        
        <section className="pt-3">
            <div className="container pad">
            <div className="row ">
                <Menu infoUser = {infoUser} />
                <div className="col-lg-8 col-xl-9 ps-xl-5">

                    <div className="d-grid mb-0 d-lg-none w-100">
                        <button className="btn btn-primary mb-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
                            <i className="fas fa-sliders-h"></i> Danh mục
                        </button>
                    </div>       
                    <Routes>
                        <Route path="/" element={<Info changGender={changGender} changAvt = {changAvt} infoUser={infoUser}  />} />
                        <Route path="/chi-tiet/:id" element={<ConfigProfile/>} />
                        <Route path="/ho-so-benh-an/:id" element={<MedicalRecord />} />
                        <Route path="/lich-kham" element={<Booking  />} />
                        <Route path="/danh-sach-lich-kham" element={<ListBooking  />} />
                        <Route path="/chi-tiet-lich-dat/:id" element={<Details  />} />
                        <Route path="/chi-tiet-lich-tiem/:id" element={<DetailBookingVaccineUser  />} />
                        <Route path="/danh-sach-nguoi-benh"  element={RoleMiddleware([2] ,   <ListPatient/> )} />
                        <Route path="/chi-tiet-lich-kham/:id" element={ <DetailBooking/>} />
                        <Route path="/chi-tiet-danh-sach-lich-kham/:id" element={RoleMiddleware([2],  <DetailListPatient/>)} />
                    </Routes>
                   
                </div>
                

            </div>
            </div>
        </section>
      );
}

export default Profile