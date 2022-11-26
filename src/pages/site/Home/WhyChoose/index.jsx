
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
            <span>TRUNG TÂM Y TẾ FPRO</span><br />
            <div className="line"></div>
        </div>
        <div className="WhyChoose">
            <div className="wrapFlex">
                <div className="flex-box box-1">
                    <p className="text_1">PHÁC ĐỒ CÁ NHÂN HOÁ</p>
                    <p>Giúp bạn hiểu rõ hơn về Vaccine trước khi tiêm có phù hợp với cơ thể.</p>
                </div>
                <div className="flex-box box-2">
                    <p className="text_1">ĐỘI NGŨ CHUYÊN NGHIỆP</p>
                    <p>Đội ngũ bác sĩ tu nghiệp tại Nga và đại học Y Hà Nội về chuyên môn.</p>
                </div>
                <div className="flex-box box-3">
                    <p className="text_1">TRẢI NGHIỆM TUYỆT VỜI</p>
                    <p>Hệ thống lịch hẹn, tái khám và chăm sóc sau điều trị được chuẩn bị một cách khoa học, tiện lợi.</p>
                </div>
                <div className="flex-box box-4">
                    <p className="text_1">PHÒNG KHÁM ĐẲNG CẤP 5 SAO</p>
                    <p>FPro được đầu tư cơ sở vật chất, trang thiết bị hiện đại, vô trùng tuyệt đối.</p>
                </div>
            </div>
        </div>
        </div>
        <div className="Overview">
            <div className="container-fluid">
                <div className="col-12">
                    <div className="imageOverview">
                        <img src="https://ivfdongdo.com/wp-content/uploads/2019/06/R_VA0651-1536x1024.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="image_flex">        
                                <div className="col-xl-3  col-md-3 col-6">
                                    <img src="https://ivfdongdo.com/wp-content/uploads/2022/05/R_VA9994-2-1536x1024.jpg" alt=""/>
                                    {/* <img src="https://nhakhoathanhan.vn/uploads/img/aanh_1.jpg" alt=""/> */}
                                </div>
                                <div className="col-xl-3  col-md-3 col-6">
                                    <img src="https://www.fvhospital.com/wp-content/uploads/2021/07/vaccination-for-french-citizens-and-their-spouses-6.jpg" alt="" />
                                    {/* <img src="https://nhakhoathanhan.vn/uploads/img/img_26.jpg" alt="" /> */}
                                </div>
                                <div className="col-xl-3  col-md-3 col-6">
                                    {/* <img src="https://nhakhoathanhan.vn/uploads/img/img_27.jpg" alt=""  /> */}
                                    <img src="https://nhakhoathanhan.vn/uploads/img/img_26.jpg" alt="" />
                                </div>
                                <div className="col-xl-3  col-md-3 col-6">
                                    {/* <img src="https://nhakhoathanhan.vn/uploads/img/aanh_4.jpg" alt=""  /> */}
                                    <img src="https://nhakhoathanhan.vn/uploads/img/img_27.jpg" alt=""  />
                                </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
     </>
              
          
    )

}
export default WhyChoose;