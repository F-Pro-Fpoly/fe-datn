import React, { useEffect, useState } from 'react';
import "./Profile.scss"
import {  Route, Routes  } from "react-router-dom";
import Info from './Info';
import Booking from './Booking';
import Menu from './Menu';
import { useSelector } from 'react-redux';
import { getInfo } from '../../../services/UserService';
import CreateDalandar from './Doctor/AddBooking';
import ListBooking from './Doctor/ListBooking';


function Profile () {

    const token = useSelector(state => state.auth.token )

    const [infoUser, setInfoUser] = useState([])


    const start  = async () =>{
        let res =  await  getInfo({token})
        let data =  res.data.data;
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
                        <Route path="/" element={<Info infoUser={infoUser}  />} />
                        <Route path="/lich-kham" element={<Booking  />} />
                        <Route path="/danh-sach-lich-kham" element={<ListBooking  />} />
                        <Route path="/them-lich-kham" element={<CreateDalandar  />} />
                    </Routes>
                   
                </div>
                

            </div>
            </div>
        </section>
      );
}

export default Profile