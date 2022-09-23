import "./Banner.scss";
import banner from "../../../image/boy-990325_1920.jpg"
import Category from "../Category";
import { useState } from "react";
import { useEffect } from "react";
function Banner () {
    
    const [Cate, setCate] = useState();

    useEffect(() => {
        let Arr = [
            {      
                'icon': "fa-regular fa-building",
                'title':"Khám chuyên khoa A"
            },
            {      
                'icon': "fa-regular fa-building",
                'title':"Khám chuyên khoa B"
            },
            {      
                'icon': "fa-regular fa-building",
                'title':"Khám chuyên khoa C"
            },
            {      
                'icon': "fa-regular fa-building",
                'title':"Khám chuyên khoa D"
            },
            {      
                'icon': "fa-regular fa-building",
                'title':"Khám chuyên khoa E"
            },
        ];
        setCate(Arr)
    },[])

    return( 

        <div className="banner">    
            <img src={banner} alt="banner" />
            <div className="text">
                <h2 className='text1'>NỀN TẢNG Y TẾ</h2>
                <h2 className='text2'>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</h2>
                    <div className='input'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder='Tìm bệnh viện' />        
                </div>               
            </div>       
            <Category Catearr = {Cate} />
        </div>
    )
}
export default Banner;