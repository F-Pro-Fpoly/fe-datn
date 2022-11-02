import React from 'react';
import "./Profile.scss"
import {  Route, Routes  } from "react-router-dom";
import Info from './Info';
import Booking from './Booking';
import Menu from './Menu';

function Profile () {

    return (
        <section className="pt-3">
            <div className="container pad">
            <div className="row ">
                <Menu />
                <div className="col-lg-8 col-xl-9 ps-xl-5">

                    <div className="d-grid mb-0 d-lg-none w-100">
                        <button className="btn btn-primary mb-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
                            <i className="fas fa-sliders-h"></i> Danh mục
                        </button>
                    </div>       
                    <Routes>
                        <Route path="/" element={<Info />} />
                        <Route path="/lich-kham" element={<Booking />} />
                    </Routes>
                   
                </div>
                

            </div>
            </div>
        </section>
      );
}

export default Profile