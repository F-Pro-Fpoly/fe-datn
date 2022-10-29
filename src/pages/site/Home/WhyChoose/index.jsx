
import "./Box.scss"
import React, { Component } from "react";
import Slider from "react-slick";
function WhyChoose () {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true
      };

    return ( 
  
     <>
        <div className="container">
              <div className="infoWhyChoose">
            <span className="service">TẠI SAO <span className="outstanding">NÊN CHỌN</span></span><br />
            <span>PHÒNG KHÁM FPRO</span><br />
            <div className="line"></div>
        </div>
        <div className="WhyChoose">
            <div className="wrapFlex">
                <div className="flex-box box-1">
                    <p className="text_1">PHÁC ĐỒ ĐIỆU TRỊ 3D CÁ NHÂN HOÁ</p>
                    <p>Giúp bạn biết trước kết quả sau niềng với độ chính xác lên tới hơn 90%.</p>
                </div>
                <div className="flex-box box-2">
                    <p className="text_1">ĐỘI NGŨ CHUYÊN NGHIỆP</p>
                    <p>Đội ngũ bác sĩ tu nghiệp tại Nga và đại học Y Hà Nội về chuyên khoa nắn chỉnh răng.</p>
                </div>
                <div className="flex-box box-3">
                    <p className="text_1">TRẢI NGHIỆM TUYỆT VỜI</p>
                    <p>Hệ thống lịch hẹn, tái khám và chăm sóc sau điều trị được chuẩn bị và sắp xếp khoa học, tiện lợi.</p>
                </div>
                <div className="flex-box box-4">
                    <p className="text_1">PHÒNG KHÁM ĐẲNG CẤP 5 SAO</p>
                    <p>Nha khoa Thành An được đầu tư cơ sở vật chất, trang thiết bị hiện đại, vô trùng tuyệt đối.</p>
                </div>
            </div>
        </div>
        </div>
        <div className="Overview">
            <div className="container-fluid">
                <div className="col-12">
                    <div className="imageOverview">
                        <img src="https://nhakhoathanhan.vn/uploads/img/h_banner_1.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="col-12">
                    <div className="image_flex">        
                            <div className="col-3 ">
                                <img src="https://nhakhoathanhan.vn/uploads/img/aanh_1.jpg" alt=""/>
                            </div>
                            <div className="col-3 ">
                                <img src="https://nhakhoathanhan.vn/uploads/img/img_26.jpg" alt="" />
                            </div>
                            <div className="col-3 ">
                                <img src="https://nhakhoathanhan.vn/uploads/img/img_27.jpg" alt=""  />
                            </div>
                            <div className="col-3 ">
                                <img src="https://nhakhoathanhan.vn/uploads/img/aanh_4.jpg" alt=""  />
                            </div>

                    </div>
                </div>
            </div>
        </div>
     </>
              
          
    )

}
export default WhyChoose;