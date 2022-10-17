import "./Banner.scss";
import banner from "../../../image/w1920-h960.jfif"
import Category from "../Category";
import { useState } from "react";
import { useEffect } from "react";
function Banner () {
    
    // const [Cate, setCate] = useState();

    // useEffect(() => {
    //     let Arr = [
    //         {      
    //             'icon': "fa-regular fa-building",
    //             'title':"Khám chuyên khoa A"
    //         },
    //         {      
    //             'icon': "fa-regular fa-building",
    //             'title':"Khám chuyên khoa B"
    //         },
    //         {      
    //             'icon': "fa-regular fa-building",
    //             'title':"Khám chuyên khoa C"
    //         },
    //         {      
    //             'icon': "fa-regular fa-building",
    //             'title':"Khám chuyên khoa D"
    //         },
    //         {      
    //             'icon': "fa-regular fa-building",
    //             'title':"Khám chuyên khoa E"
    //         },
    //     ];
    //     setCate(Arr)
    // },[])

    return( 

        <div className="banner">    
            <div className="bongmo"></div>
            <img src={banner} alt="banner" />
            <div className="text">
                <h2 className='text1'>NỀN TẢNG Y TẾ</h2>
                <h2 className='text2'>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</h2>
            
                <button className="btn btn-primary">Đăng ký lịch ngay</button>
      
            </div>       
            {/* <Category Catearr = {Cate} /> */}
        </div>
    )
}
export default Banner;